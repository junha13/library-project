///
/// Open AI 사용하기
///

import OpenAI from 'openAI'

const OpenAIKey = import.meta.env.VITE_OPENAI_API_KEY
const openai = new OpenAI({
    apiKey: OpenAIKey
})

const doSummery = async (input) => {

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'user',
                    content: `아래 글을 200자 이내로 요약해줘. ### ${input}`
                }
            ]
        })

        console.log(`response -> ${JSON.stringify(response)}`);

        const output = {
            role: response.choices[0].message.role,
            content: response.choices[0].message.content
        }
        return output

    } catch(err) {
        throw new Error(`Error -> ${err}`)
    }
}
/*
const main = async() => {
    try {

        const output = await doSummery(input);
    } catch(err) {
        console.error(`요약 과정에서 에러 -> ${err}`)
    }
}
*/
const input = `[앳스타일 김예나 기자] 심으뜸이 딩크족을 선언했다.
심으뜸은 지난 20일 이현이 채널에 업로드된 영상에 등장했다.
이현이는 심으뜸에게 스트레칭 루틴을 요청하며 "내가 워킹맘이라서 시간이 아예 없다. 자면
(오전) 6시 50분에 매일 알람이 울린다"고 바쁜 하루 일과를 소개했다.
심으뜸은 "매일 6시 50분에 일어나는 거 좀 힘들다. 저 새벽 2~3시에 잔다"고 이현이의 상황과 비교했다.
이현이는 "난 그래야 한다. 난 몇 시에 자든 상관없다. (애 때문에) 6시 50분에 일어 나야 된다"고 고달픈 일상을 전했다.
심으뜸은 "너무 힘들어, 술 마셔도 그 시간에 일어나야 돼요?"라고 물었고, 이현이는 "애 학교를 보내야 하니까"라고 이유를 답했다.
그러자 심으뜸은 "딩크족을 선언하겠다"고 웃었다.
이현이는 "(오전) 6시 50분 딱 알람이 울리면 몸이 덜 깬 채로 벌떡 일어나서 애를 깨우러 간다. 그때부터 몸이 아프다"고 워킹맘의 현실을 알렸다.
1990년생 심으뜸은 2018년 결혼했다.`;

// 즉시실행함수 같은 경우는 세미콜론을 붙히지 않음연 이어진 코드로 인식함

(async() => {
    try {

        const output = await doSummery(input);

        console.log(`요약 결과 -> ${output.content}`)
    } catch(err) {
        console.error(`요약 과정에서 에러 -> ${err}`)
    }
})();
// 함수를 정의하자마자 바로 실행
// 바로 실행되면 doSummery가 실행됨