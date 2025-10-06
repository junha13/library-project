///
/// Open AI 사용하기
///

import OpenAI from 'openAI'


const OpenAIKey = import.meta.env.VITE_OPENAI_API_KEY
const openai = new OpenAI({
    apiKey: OpenAIKey
})

const messages = [
    {
        role:'system',
        content:`너는 음식점에 대해서 잘 알고 있는 전문가야. 위치를 기준으로 해서 주변에 있는 음식점을 추천해줘`
    },
    {
        role:'user',
        content:`내 위치는 구로구청이야`
    },
    {
        role:'assistant',
        content:`1. 대동중화 ### 설명 : ㅇㅇ 위도: 경도:\n\n 2. 대동중화 ### 설명 : ㅇㅇ 위도: 경도:\n\n`
    }
]
// 경위도 좌표만 json으로 받고 그걸 다시 질문으로 
// 질문을 받고 그걸 웹에 검색해서 다시 질문을 하고 몇번 더 gpt를 돌리는거임 그럼 추가학습이 필요가 없으니가
// 기밀데이터가 아니라면 이런식으로 만들어낼 수 있으니까

const doPrompt = async (input) => {

    try {
        messages.push(
            {
                role:'user',
                content:input
            }
        )        
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'user',
                    content: messages
                }
            ]
        })

        // console.log(`response -> ${JSON.stringify(response)}`);

        const output = {
            role: response,
            content: response
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
const input = `내 위치는 구로구청이야`;

// 즉시실행함수 같은 경우는 세미콜론을 붙히지 않음연 이어진 코드로 인식함

(async() => {
    try {

        const output = await doPrompt(input);

        console.log(`요약 결과 -> ${output.content}`)
    } catch(err) {
        console.error(`요약 과정에서 에러 -> ${err}`)
    }
})();
// 함수를 정의하자마자 바로 실행
// 바로 실행되면 doSummery가 실행됨