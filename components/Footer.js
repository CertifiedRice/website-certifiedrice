const Footer = () => {
    return (
        <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div class="sm:flex sm:items-center sm:justify-between">
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="../about" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="https://github.com/CertifiedRice/website-certifiedrice" class="mr-4 hover:underline md:mr-6">Source</a>
                    </li>
                    <li>
                        <a href="https://github.com/CertifiedRice/website-certifiedrice/blob/master/LICENSE" class="mr-4 hover:underline md:mr-6 ">OpenSource License - MIT License</a>
                    </li>
                    <li>
                        <a href="../contact" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022-Present <a href="https://github.com/CertifiedRice" class="hover:underline">CertifiedRice</a>. All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer;