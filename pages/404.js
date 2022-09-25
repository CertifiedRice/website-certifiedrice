export default function Error() {
    return (
        <div>
            <h1 class="text-center text-2xl">404 ERROR</h1>
            <p class="text-center">Looks like this page was not found!</p>
                <div class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-slate-700">
                        <h5 class="text-white text-xl leading-tight font-medium mb-2">Return Home</h5>
                        <a href="./">
                            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Home</button>

                        </a>
                    </div>
                </div>
        </div>
    )
}