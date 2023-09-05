export default function Navbar() {
    return (
        <div class="navbar sticky max-w-[1650px] z-50 px-4 mx-auto bg-opacity-80 backdrop-blur-md bg-opacity-40 p-4 rounded-lg">
            <div class='navbar-start'>
                <div class='dropdown'>
                    <label tabIndex="0" class='btn btn-ghost lg:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                    </label>
                    <ul class='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1a1a1c] rounded-box w-52'>
                        <li class='px-4 text-white cursor-pointer transition-all py-1 text-[16px] font-light hover:bg-white/20 rounded-[5px] border border-white/0 hover:border-white/60'>
                            <a href='#skills' class='hover:bg-none'>Skills</a>
                        </li>
                        <li class='px-4 text-white cursor-pointer transition-all py-1 text-[16px] font-light hover:bg-white/20 rounded-[5px] border border-white/0 hover:border-white/60'>
                            <a href='#projects' class='hover:bg-none'>Projects</a>
                        </li>
                        <li class='px-4 text-white cursor-pointer transition-all py-1 text-[16px] font-light hover:bg-white/20 rounded-[5px] border border-white/0 hover:border-white/60'>
                            <a href='#skills' class='hover:bg-none'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div class='flex flex-row items-center gap-x-1 md:gap-x-2'>
                    <a class='font-bold md:block hidden brand-text text-[16px] md:text-[28px] text-[#4E4E50]'>Sam Doncaster</a>
                </div>
            </div>
            <div class='navbar-center hidden lg:flex'>
                <ul class='flex flex-row px-1'>
                    <li class='px-4 text-white cursor-pointer transition-all py-1 text-[16px] font-light hover:bg-white/20 rounded-[5px] border border-white/0 hover:border-white/60'>
                        <a href='#skills' class='hover:bg-none'>Skills</a>
                    </li>
                    <li class='px-4 text-white cursor-pointer transition-all py-1 text-[16px] font-light hover:bg-white/20 rounded-[5px] border border-white/0 hover:border-white/60'>
                        <a href='#projects' class='hover:bg-none'>Projects</a>
                    </li>
                    <li class='px-4 text-white cursor-pointer transition-all py-1 text-[16px] font-light hover:bg-white/20 rounded-[5px] border border-white/0 hover:border-white/60'>
                        <a href='#skills' class='hover:bg-none'>Contact</a>
                    </li>
                </ul>
            </div>
            <div class='navbar-end lg:flex hidden'>
                <a href='#contact' class='gradient-btn cursor-pointer z-50  transition-all border border-white/0 hover:border-white/50 min-w-[190px] flex text-center flex-row items-center justify-center px-5 py-3 text-white text-[13px] md:text-[16px] font-semibold nav-btn'>Build with me</a>
            </div>
        </div>
    )
}