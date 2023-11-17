function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}


function firstTest() {
    todos = [];

    for (let i = 0; i < 100000; i++) {
        const todo = {
            project: null, // 1. 프로젝트
            board: null, // 2. 보드
            title: null,  // 3. 제목
            subTitle: null, // 4. 부제목
            priority: null,  // 5. 우선순위
            date: null, // 6. 기한
            isRepeat: null, // 7. 반복여부
            files: null, // 8. 첨부파일
            tags: null, // 9. 태그
            comment: null, // 10. 댓글
            explanation: null, // 11. 설명
            subTodos: null, // 12. 하위할일
            isAlarm: null, // 13. 알람여부
            alarmTime: null, // 14. 알람시간
            status: null, // 15. 진행 상태
        };
        for (const k of Object.keys(todo)) {
            const randomString = generateRandomString(10);
            todo[k] = randomString;
        }

        todos.push(todo);
    }
}

function secondTest() {
    anythingArr = [];

    for (let i = 0; i < 100000; i++) {
        const obj = {};
        for (let j = 0; j < 15; j++) {
            const randomString = generateRandomString(10);
            obj[randomString] = randomString;
        }

        anythingArr.push(obj);
    }
}


function testA() {
    console.time("firstTest function execution time");

    firstTest();

    console.timeEnd("firstTest function execution time");
}

function testB() {
    console.time("secondTest function execution time");

    secondTest();

    console.timeEnd("secondTest function execution time");
}

// 반복횟수 동일
testA();
testB();