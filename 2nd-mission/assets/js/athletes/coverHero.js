//ANCHOR - Cover
class AthleteCover extends HTMLElement {
    connectedCallback() {
        const athleteImages = {
        badminton: '../assets/images/athletes/Badminton_Athletes_Hero.webp',
        badminton2: '../assets/images/athletes/Badminton_Athletes_Hero2.webp',
        // Add more mappings as needed
};

    const id = this.getAttribute('id');
    const imageUrl = athleteImages[id] || '../assets/images/athletes/Badminton_Athletes_Hero.webp';

    this.innerHTML = `
    <div class="relative">
        <img class="object-cover h-[450px] w-full" src="${imageUrl}" alt="Athlete">
        <div class="flex justify-center">
        <p class="absolute top-[50%] text-white bg-[#00000060] text-4xl p-3 text-center">
            YONEX BADMINTON ATHLETES
        </p>
        <div class="absolute top-[88%] w-full px-[50px] max-md:px-0">
            <div class="bg-white shadow-lg md:flex mx-auto items-center justify-between md:max-w-[830px] py-5 px-[20px]">
            <div class="max-md:hidden">
                <p>FILTER BY</p>
            </div>
            <div class="max-md:flex py-1">
                <p class="pb-2 max-md:pr-8 max-md:py-2">Region</p>
                <div class="border max-md:grow">
                <select class="w-full h-[40px] px-[20px] py-[5px] max-md:grow">
                    <option value="">[Representing - All]</option>
                    <option value="Canada">
                                                Canada                        
                                            </option>
                                            <option value="China">
                                                China                        
                                            </option>
                                            <option value="Chinese Taipei">
                                                Chinese Taipei                        
                                            </option>
                                            <option value="Denmark">
                                                Denmark                        
                                            </option>
                                            <option value="France">
                                                France                        
                                            </option>
                                            <option value="India">
                                                India                        
                                            </option>
                                            <option value="Indonesia">
                                                    Indonesia                        
                                                </option>
                                            <option value="Japan">
                                                Japan                        
                                            </option>
                                            <option value="Korea">
                                                Korea                        
                                            </option>
                                            <option value="Malaysia">
                                                Malaysia                        
                                            </option>
                                            <option value="Spain">
                                                Spain                        
                                            </option>
                                            <option value="Thailand">
                                                Thailand                        
                                            </option>
                </select>
                </div>
            </div>
            <div class="max-md:flex py-1">
                <p class="pb-2 max-md:pr-8 max-md:py-2">Athlete</p>
                <div class="border max-md:grow">
                <select class="w-full h-[40px] px-[20px] py-[5px] max-md:grow">
                    <option value="">[Representing - All]</option>
                    <option value="Canada">
                                                Canada                        
                                            </option>
                                            <option value="China">
                                                China                        
                                            </option>
                                            <option value="Chinese Taipei">
                                                Chinese Taipei                        
                                            </option>
                                            <option value="Denmark">
                                                Denmark                        
                                            </option>
                                            <option value="France">
                                                France                        
                                            </option>
                                            <option value="India">
                                                India                        
                                            </option>
                                            <option value="Indonesia">
                                                    Indonesia                        
                                                </option>
                                            <option value="Japan">
                                                Japan                        
                                            </option>
                                            <option value="Korea">
                                                Korea                        
                                            </option>
                                            <option value="Malaysia">
                                                Malaysia                        
                                            </option>
                                            <option value="Spain">
                                                Spain                        
                                            </option>
                                            <option value="Thailand">
                                                Thailand                        
                                            </option>
                </select>
                </div>
            </div>
            <div class="pt-3">
                <button class="bg-black text-white px-8 py-3 hover:bg-white hover:text-black hover:border-2 hover:border-black">
                APPLY
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
    `;
}
}

customElements.define('athlete-cover', AthleteCover);