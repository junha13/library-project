import axios from 'axios'

const data_key = import.meta.env.VITE_DATA_API_KEY
/// 캠핑장 리스트 조회
/// 공공데이터 포털 연동
///

const getCampingPlaceList = async () => {
    console.log(`getCampingPlaceList called`)

    const url = `https://apis.data.go.kr/B551011/GoCamping/basedList`;

    try {
        const response = await axios.get(url, {
            params: {
                numOfRows : 100,
                pageNo: 1,
                MobileOS: `ETC`,
                MobileApp : `MobileApp`,
                serviceKey: data_key,
                _type: `json`
            }
        })
        console.log(`${JSON.stringify(response.data)}`)
    } catch(err) {
        console.log(`요청 중 에러 ${err}`)
    }
}

// 조회 함수 호출하기
getCampingPlaceList();