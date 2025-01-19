function solution(T) {
    let maxZigzag = 0;

    function findZigzagLength(node, isLeft, length) {
        if(!node) return;

        maxZigzag = Math.max(maxZigzag, length);

        if(isLeft) {
            findZigzagLength(node.l, false, length + 1);
            findZigzagLength(node.r, true, 1);
        } else {
            findZigzagLength(node.r, true, length + 1);
            findZigzagLength(node.l, false, 1);
        }
    }

    if (T.l) findZigzagLength(T.l, false, 1);
    if (T.r) findZigzagLength(T.r, true, 1)

    return maxZigzag;
}