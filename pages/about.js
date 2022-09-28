import { motion } from "framer-motion"

export default function About() {
    return (
        <div>
            <motion.div initial="pageInitial" animate="pageAnimate" exit="pageExit" transition={{ duration: .7, type: 'easeInOut' }} style={{ position: 'relative' }} variants={{
                pageInitial: {
                    opacity: 0,
                },
                pageAnimate: {
                    opacity: [0, 1],
                    scale: [1, 1.03, 1]
                },
                pageExit: {
                    backgroundColor: 'white',
                    filter: `invert()`,
                    opacity: 0,
                }
            }}>
                <h1 class="text-center text-2xl">About me!</h1>

                <hr></hr>

                <p class="text-xl text-center">CertifiedRice is a passionate and freelance Web and Game Developer!</p>

                <p class="text-xl text-center">CertifiedRice is a Full-Stack Web Developer based in the United States!</p>

                <p class="text-xl text-center">He is a self-taught programmer and game developer!</p>
                <div class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-slate-600 max-w-sm">
                        <h5 class="text-white text-xl leading-tight font-medium mb-2">My work!</h5>
                        <p class="text-white0 text-base mb-4">
                            This button leads to my portfolio and works!
                        </p>
                        <a href="./work">
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}