import { motion } from "framer-motion"

export default function Contact() {
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
                <h1 class="text-center text-2xl">Contact Me!</h1>
                <div class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-slate-600 max-w-sm">
                        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Discord</h5>
                        <p class="text-white0 text-base mb-4">
                            This is one of the best ways to contact me!
                        </p>
                        <a href="https://discord.gg/mQskFtPpfJ">
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Discord Server</button>
                        </a>
                    </div>
                </div>

                <div class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-slate-600 max-w-sm">
                        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Email</h5>
                        <p class="text-white0 text-base mb-4">
                            This is one of the best ways to contact me!
                        </p>
                        <a href="mailto:certifiedricee@gmail.com">
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Discord Server</button>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}