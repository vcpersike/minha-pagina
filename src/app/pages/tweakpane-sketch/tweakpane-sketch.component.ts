import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as random from 'canvas-sketch-util/random';
import * as math from 'canvas-sketch-util/math';
import { Pane } from 'tweakpane';

@Component({
  selector: 'app-tweakpane-sketch',
  templateUrl: './tweakpane-sketch.component.html',
  styleUrls: ['./tweakpane-sketch.component.scss']
})
export class TweakpaneSketchComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;

  private params = {
    cols: 10,
    rows: 10,
    scaleMin: 1,
    scaleMax: 30,
    freq: 0.001,
    amp: 0.2,
    frame: 0,
    animate: true,
    lineCap: 'butt' as CanvasLineCap,
  };

  private width = 1080;
  private height = 1080;
  private frame = 0;
  private animationId: any;

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    this.context = canvas.getContext('2d')!;
    canvas.width = this.width;
    canvas.height = this.height;

    this.createPane();
    this.animate();
  }

  createPane() {
    const pane = new Pane();

    let folder = pane.addFolder({ title: 'Grid' });
    folder.addInput(this.params, 'lineCap', {
      options: { butt: 'butt', round: 'round', square: 'square' },
    });
    folder.addInput(this.params, 'cols', { min: 2, max: 50, step: 1 });
    folder.addInput(this.params, 'rows', { min: 2, max: 50, step: 1 });
    folder.addInput(this.params, 'scaleMin', { min: 1, max: 100 });
    folder.addInput(this.params, 'scaleMax', { min: 1, max: 100 });

    folder = pane.addFolder({ title: 'Noise' });
    folder.addInput(this.params, 'freq', { min: -0.01, max: 0.01 });
    folder.addInput(this.params, 'amp', { min: 0, max: 1 });
    folder.addInput(this.params, 'animate');
    folder.addInput(this.params, 'frame', { min: 0, max: 999 });
  }

  animate = () => {
    this.frame = this.params.animate ? this.frame + 1 : this.params.frame;

    this.render();
    this.animationId = requestAnimationFrame(this.animate);
  };

  render() {
    const { context, width, height, params, frame } = this;

    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cols = params.cols;
    const rows = params.rows;
    const numCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

    for (let i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;
      const w = cellw * 0.8;
      const h = cellh * 0.8;

      const f = params.animate ? frame : params.frame;

      const n = random.noise3D(x, y, f * 10, params.freq);
      const angle = n * Math.PI * params.amp;

      const scale = math.mapRange(n, -1, 1, params.scaleMin, params.scaleMax);

      context.save();
      context.translate(x, y);
      context.translate(margx, margy);
      context.translate(cellw * 0.5, cellh * 0.5);
      context.rotate(angle);

      context.lineWidth = scale;
      context.lineCap = params.lineCap;

      context.beginPath();
      context.moveTo(w * -0.5, 0);
      context.lineTo(w * 0.5, 0);
      context.stroke();

      context.restore();
    }
  }
}
