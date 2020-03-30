ta = document.getElementById('input');
width = document.getElementById('input').clientWidth;
height = document.getElementById('input').clientHeight;

document.getElementById('input').addEventListener('mouseup', () => {
    if(ta.clientWidth != width || ta.clientHeight != height){
        document.getElementById('width').textContent = `Width is ${ta.clientWidth}`;
        document.getElementById('height').textContent = `Height is ${ta.clientHeight}`;
    }
    width = ta.clientWidth;
    height = ta.clientHeight;
});
