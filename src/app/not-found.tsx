import "./style.scss"
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className="ErrorNotFound">
            <Image className="ErrorNotFoundImage" alt='404 Error' src="/404.png" width={400} height={0} />
        </div>
    )
}