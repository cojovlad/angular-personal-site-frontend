import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dvd-screen-saver',
  templateUrl: './dvd-screen-saver.html',
  styleUrls: ['./dvd-screen-saver.css']
})
export class DvdScreenSaver implements AfterViewInit, OnDestroy {
  @ViewChild('dvdCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private x = 50;
  private y = 50;
  private dx = 2;
  private dy = 2;
  private dvdWidth = 100;
  private dvdHeight = 50;
  private color = 'red';
  private animationId: number | null = null;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = canvas.offsetWidth;   // <-- ensure width is set correctly
    canvas.height = canvas.offsetHeight; // <-- ensure height is set correctly
    this.ctx = canvas.getContext('2d')!;
    this.startAnimation();
  }

  private startAnimation(): void {
    this.animate();
  }

  private animate(): void {
    const canvas = this.canvasRef.nativeElement;

    // Clear canvas
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw DVD rectangle
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.dvdWidth, this.dvdHeight);

    // Draw DVD text
    this.ctx.fillStyle = 'white';
    this.ctx.font = 'bold 24px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText('DVD', this.x + this.dvdWidth / 2, this.y + this.dvdHeight / 2);

    // Update position
    this.x += this.dx;
    this.y += this.dy;

    // Bounce off walls
    if (this.x + this.dvdWidth > canvas.width || this.x < 0) {
      this.dx = -this.dx;
      this.changeColor();
    }
    if (this.y + this.dvdHeight > canvas.height || this.y < 0) {
      this.dy = -this.dy;
      this.changeColor();
    }

    // Continue animation
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private changeColor(): void {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'cyan', 'magenta'];
    let newColor = this.color;
    while (newColor === this.color) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    this.color = newColor;
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
