import { getBannerInfo } from "@/lib/get-banner-info";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export const Banner = async () => {
    const { title, description, image } = await getBannerInfo()

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-16 xl:gap-20 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={image} alt="mockup" />
                </div>

                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        {title}
                    </h1>

                    <div className="[&>p>strong]:font-bold max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg dark:text-gray-400">
                        <BlocksRenderer content={description} />
                    </div>

                    <a href="#categories" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-white">
                        Shop the latest drop
                    </a>
                </div>
            </div>

        </section>

    )

}