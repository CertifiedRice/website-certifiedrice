export default function Work() {
    return (
        <div>
            <h1 class="text-center text-2xl">My work and portfolio!</h1>

            <div class="flex justify-center">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img class="rounded-t-lg" src="https://i.gyazo.com/b4eee95a1919189f6b94e8f981aa03c3.png" alt="" />
                    </a>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Fried-Aim</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Unity 3D FPS Aim Trainer Game
                        </p>
                        <a href="https://github.com/CertifiedRice/Fried-Aim">
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Source</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}