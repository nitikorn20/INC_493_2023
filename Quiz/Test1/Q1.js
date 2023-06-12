
function cal(_p1, _p2, _con) {
    if (_con == '+') {
        let result = _p1 + _p2;
        console.log("Parameter 1 = " + _p1 + " and Parameter 2 = " + _p2 + " P1 + P2 = " + result.toFixed(3));
    }
    else if (_con == '-') {
        let result = _p1 - _p2;
        console.log("Parameter 1 = " + _p1 + " and Parameter 2 = " + _p2 + " P1 - P2 = " + result.toFixed(3));
    }
    else if (_con == '*') {
        let result = _p1 * _p2;
        console.log("Parameter 1 = " + _p1 + " and Parameter 2 = " + _p2 + " P1 * P2 = " + result.toFixed(3));
    }
    else if (_con == '/') {
        let result = _p1 / _p2;
        console.log("Parameter 1 = " + _p1 + " and Parameter 2 = " + _p2 + " P1 / P2 = " + result.toFixed(3));
    }
}

function a(_p1, _p2) {
    let result = _p1 + _p2;
    console.log("Parameter 1 = " + _p1 + " and Parameter 2 = " + _p2 + " P1 + P2 = " + result.toFixed(3));
}
