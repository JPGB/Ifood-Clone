import Image from 'next/image'

export default function index(Banners) {
    return (
        <div className="flex w-full pt-3 space-x-2 overflow-x-scroll no-scrollbar flex-nowrap">
            {
                Banners.campos.map((banner) => (
                    <div className="flex-none h-32 m-1 rounded cursor-pointer hover:bg-gray-50 w-72">
                        <Image src={banner} alt={banner} width="288" height="128" />
                    </div>
                ))
            }
        </div>
    )
}
