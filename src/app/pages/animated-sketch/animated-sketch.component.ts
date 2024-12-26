import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as random from 'canvas-sketch-util/random';
import * as math from 'canvas-sketch-util/math';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-animated-sketch',
  imports: [CommonModule, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './animated-sketch.component.html',
  styleUrls: ['./animated-sketch.component.scss']
})
export class AnimatedSketchComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  title: string = 'Animações';
  private context!: CanvasRenderingContext2D;
  private width: number = window.innerWidth;
  private height: number = window.innerHeight;
  private agents: Agent[] = [];

  constructor(private router: Router) {}
  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    this.context = canvas.getContext('2d')!;
    canvas.width = this.width;
    canvas.height = this.height;

    this.initializeAgents();
    this.animate();
  }

  initializeAgents() {
    for (let i = 0; i < 40; i++) {
      const x = random.range(0, this.width);
      const y = random.range(0, this.height);
      this.agents.push(new Agent(x, y));
    }
  }

  animate = () => {
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.agents.length; i++) {
      const agent = this.agents[i];

      for (let j = i + 1; j < this.agents.length; j++) {
        const other = this.agents[j];
        const dist = agent.pos.getDistance(other.pos);

        if (dist > 200) continue;

        this.context.lineWidth = math.mapRange(dist, 0, 200, 12, 1);

        this.context.beginPath();
        this.context.moveTo(agent.pos.x, agent.pos.y);
        this.context.lineTo(other.pos.x, other.pos.y);
        this.context.stroke();
      }
    }

    this.agents.forEach(agent => {
      agent.update();
      agent.draw(this.context);
      agent.bounce(this.width, this.height);
    });

    requestAnimationFrame(this.animate);
  };

  goToHome(): void {
    this.router.navigate(['/home'], { replaceUrl: true });
  }
}

class Vector {
  constructor(public x: number, public y: number) {}

  getDistance(v: Vector): number {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

class Agent {
  pos: Vector;
  vel: Vector;
  radius: number;

  constructor(x: number, y: number) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
    this.radius = random.range(4, 12);
  }

  bounce(width: number, height: number) {
    if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
    if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.lineWidth = 4;

    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    context.restore();
  };

}
