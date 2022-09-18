var mokoko = '상규';
mokoko2 = '모코콩';

const mokokoRPG = {
    mokokong: '주니어',
    mokokoLand() {
        console.log(this); // (1)

        function mokokongLand () {
            console.log(this.mokoko); // (2)
            console.log(this.mokoko2); // (3)
        }

        mokokongLand();
    }
}

mokokoRPG.mokokoLand();


/**
 * 개발 환경: Node.js
 * 위의 값을 실행 하였을 때 (1), (2), (3)에 각각 어떠한 값들이 콘솔에 찍히는지 적고,
 * 그 이유에 대해서 설명해주세요! :)
 */