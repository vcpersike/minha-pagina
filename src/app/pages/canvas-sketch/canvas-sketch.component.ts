import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as random from 'canvas-sketch-util/random';

@Component({
  selector: 'app-canvas-sketch',
  templateUrl: './canvas-sketch.component.html',
  styleUrls: ['./canvas-sketch.component.scss']
})
export class CanvasSketchComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;

  text: string = 'A';
  fontSize: number = 1200;
  fontFamily: string = 'serif';
  typeCanvas!: HTMLCanvasElement;
  typeContext!: CanvasRenderingContext2D;
  cell: number = 20;

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    this.context = canvas.getContext('2d')!;
    this.typeCanvas = document.createElement('canvas');
    this.typeContext = this.typeCanvas.getContext('2d')!;
    this.typeCanvas.width = window.innerWidth / this.cell;
    this.typeCanvas.height = window.innerHeight / this.cell;

    this.start();
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    this.text = event.key.toUpperCase();
    this.render();
  }

  start() {
    this.render();
  }

  render() {
    const width = 1080;
    const height = 1080;

    const cols = Math.floor(width / this.cell);
    const rows = Math.floor(height / this.cell);
    const numCells = cols * rows;

    this.typeContext.fillStyle = 'black';
    this.typeContext.fillRect(0, 0, cols, rows);

    this.typeContext.fillStyle = 'white';
    this.typeContext.font = `${cols * 1.2}px ${this.fontFamily}`;
    this.typeContext.textBaseline = 'top';

    const metrics = this.typeContext.measureText(this.text);
    const mx = -metrics.actualBoundingBoxLeft;
    const my = -metrics.actualBoundingBoxAscent;
    const mw = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
    const mh = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    const tx = (cols - mw) * 0.5 - mx;
    const ty = (rows - mh) * 0.5 - my;

    this.typeContext.save();
    this.typeContext.translate(tx, ty);
    this.typeContext.fillText(this.text, 0, 0);
    this.typeContext.restore();

    const typeData = this.typeContext.getImageData(0, 0, cols, rows).data;

    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, width, height);

    for (let i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * this.cell;
      const y = row * this.cell;

      const r = typeData[i * 4 + 0];

      const glyph = this.getGlyph(r);

      this.context.font = `${this.cell * 2}px ${this.fontFamily}`;
      this.context.fillStyle = 'white';
      this.context.textAlign = 'center';
      this.context.textBaseline = 'middle';

      this.context.save();
      this.context.translate(x + this.cell / 2, y + this.cell / 2);
      this.context.fillText(glyph, 0, 0);
      this.context.restore();
    }
  }

  getGlyph(value: number): string {
    if (value < 50) return '';
    if (value < 100) return '.';
    if (value < 150) return '-';
    if (value < 200) return '+';

    const glyphs = '_= /'.split('');
    return random.pick(glyphs);
  }
}
