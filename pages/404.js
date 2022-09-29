import { motion } from "framer-motion"

export default function Error() {
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
                <h1 class="text-center text-2xl">404 ERROR</h1>
                <p class="text-center">Looks like this page was not found!</p>
                
                    <div class="flex space-x-2 justify-center">
                        <a href="./">
                            <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Return to home!</button>
                        </a>
                    </div>
            </motion.div>
        </div>
    )
}