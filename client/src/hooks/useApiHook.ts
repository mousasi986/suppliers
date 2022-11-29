import { useState } from "react"


export const useHttp = () => {
    const [loading, setLoading] = useState(false)

    const request = <IData>(url: string, method: string = 'GET', body: Object | null = null, headers: any = {}): Promise<IData> => {
        return new Promise(async (res, rej) => {
            setLoading(true)
            try {
                let sBody: string | null = null
                if (body) {
                    sBody = JSON.stringify(body)
                    headers['Content-type'] = 'application/json'
                }
                const responce = await fetch(url, { method, body: sBody, headers})
                const data: IData = await responce.json()
                setLoading(false)
                res(data)


            } catch (e) {
                setLoading(false)
                rej(e)
            }
        })
    }

    return { loading, request }

}