import { motion } from "framer-motion"

export default function Work() {
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
                <h1 class="text-center text-2xl">My work and portfolio!</h1>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-gray-700 max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg" src="https://i.gyazo.com/b4eee95a1919189f6b94e8f981aa03c3.png" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-white text-xl font-medium mb-2">Fried-Aim</h5>
                            <p class="text-white text-base mb-4">
                                Unity 3D FPS Aim Trainer Game
                            </p>
                            <a href="https://github.com/CertifiedRice/Fried-Aim">
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Source</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* -------- */}

                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-gray-700 max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg" src="" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-white text-xl font-medium mb-2">Razer Chroma Roblox Integration</h5>
                            <p class="text-white text-base mb-4">
                                Roblox Interaction with Razer Peripherals and Products RGB Lighting!
                            </p>
                            <a href="https://www.youtube.com/watch?v=0CGDJt5zSPM">
                                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Video</button>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}