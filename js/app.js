document.addEventListener('DOMContentLoaded', main)

async function main() {
    const canvas = document.getElementById('canvas')

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d')

        // drawSimpleTriangle(ctx)
        // await sleep(500)
        //
        // clearCanvas(ctx, canvas)
        // await drawColorRect(ctx)
        // await drawRectWithRounds(ctx)
        // clearCanvas(ctx, canvas)

        await drawSerpinskiTriangle(ctx)

    } else {

    }
}

function clearCanvas(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.height, canvas.width)
}

async function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}

function drawSimpleTriangle(ctx) {
    ctx.beginPath()
    ctx.moveTo(25, 25)
    ctx.lineTo(105, 25)
    ctx.lineTo(25, 105)
    ctx.fill()
}

async function drawColorRect(ctx) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 25.5 * i) + ',' + Math.floor(255 - 25.5 * j) + ',0)'
            ctx.fillRect(j * 25, i * 25, 25, 25)
            await sleep(15)
        }
    }
}

async function drawRectWithRounds(ctx) {
    for (let j = 9; j >= 0; j--) {
        for (let i = 9; i >= 0; i--) {
            ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ')'
            ctx.clearRect(j * 25, i * 25, 25, 25)
            ctx.beginPath()
            ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true)
            ctx.stroke()
            await sleep(20)
        }
    }
}

async function drawSerpinskiTriangle (ctx) {
    const pointA = [30, 270]
    const pointB = [270, 270]
    const pointC = [150, 30]

    const points = [pointA, pointB, pointC]
    points.forEach(point => {
        ctx.fillRect(...point, 2, 2)
        ctx.fillRect(...point, 2, 2)
    })
    ctx.font = '32px serif'
    ctx.fillText('B',...pointB)
    ctx.fillText('C',...pointC)
    ctx.direction = 'rtl'
    ctx.fillText('A',...pointA)

    const POINT_AMOUNT = 25_000

    let i = 0
    let randomVertexIndex

    let currentPoint = [210, 150]

    for (; i<POINT_AMOUNT; i++) {
        randomVertexIndex = Math.floor(Math.random() * 3)
        await sleep(0)
        ctx.fillRect(...currentPoint, 1, 1)

        currentPoint[0] = (points[randomVertexIndex][0] + currentPoint[0])/2
        currentPoint[1] = (points[randomVertexIndex][1] + currentPoint[1])/2
    }
}




