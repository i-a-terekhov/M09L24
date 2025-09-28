export class Snake {

    currentDirection = 'right';
    snake = [
        {x: 10, y: 20},
    ];
    context = null;
    positionsCount = null;
    positionsSize = null;

    constructor(context, positionsCount, positionsSize) {
        this.context = context;
        this.positionsCount = positionsCount;
        this.positionsSize = positionsSize;
    }

    showSnake() {
        for (let i = 0; i < this.snake.length; i++) {
            this.context.fillStyle = 'black';
            this.context.beginPath();
            this.context.fillRect(this.snake[i].x * this.positionsSize,
                this.snake[i].y * this.positionsSize, this.positionsSize, this.positionsSize);
        }

        let newHeadPosition = {
            x: this.snake[0].x,
            y: this.snake[0].y,
        }

        this.snake.pop();

        if (this.currentDirection === 'left') {
            newHeadPosition.x -= 1;
        } else if (this.currentDirection === 'right') {
            newHeadPosition.x += 1;
        } else if (this.currentDirection === 'up') {
            newHeadPosition.y -= 1;
        } else if (this.currentDirection === 'down') {
            newHeadPosition.y += 1;
        }

        this.snake.unshift(newHeadPosition);
    }
}