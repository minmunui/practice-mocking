import {rest} from 'msw'
import {PRODUCTS} from "./mockingDatas/mockData";

// handler에 처리할 request들을 모두 집어넣습니다.
export const handlers = [
    rest.get('/api/products', (req, res, ctx) => {
        return res(
            ctx.status(200), // 반환 status
            ctx.delay(1000), // 반환 delay
            ctx.json(PRODUCTS) // 반환할 데이터
        )
    }),
    rest.get('/api/product/:id', (req, res, ctx) => {
        // 관련된 logic도 작성할 수 있겠죠, 예를 들어 해당 아이템이 없을 경우 404코드를 반환합니다.
        const result = PRODUCTS.find(product => product.id === parseInt(req.params.id))
        if (result !== undefined)
            return res(
                ctx.status(200),
                ctx.delay(1000),
                ctx.json(result)
            )
        else {
            return res(
                ctx.status(404),
                ctx.delay(1000),
                ctx.json({
                    message: "존재하지 않는 상품입니다."
                })
            )
        }
    })
]