
const swiper = new Swiper('.swiper', {
	mousewheel: true,
	speed: 1500,
	direction: 'vertical',
	parallax:true
	
})

document.querySelectorAll('.header-content h1').forEach(e => {
	e.innerHTML = e.textContent.replace(/ (-|#|@){1}/g, s => s[1]+s[0]).replace(/(\S*)/g, m => {
		return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>')
	})
	e.querySelectorAll('.letter').forEach(function(l, i) {
		l.setAttribute('style', `z-index: -${ i }; transition-duration: ${ i/5 + 1 }s`)
	})
})

swiper.on('slideChange', function(){
	document.querySelectorAll('.header-content__slide').forEach(function(e,index){
		return swiper.activeIndex === index ? e.classList.add('active') : e.classList.remove('active')
	})
})