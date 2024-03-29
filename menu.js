const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

// /*===========================================*/

// const anchors = document.querySelectorAll('a[href*="#"]');

// anchors.forEach(anchor => {
// 	anchor.addEventListener('click', event => {
// 		event.preventDefault();

// 		const blockID = anchor.getAttribute('href').substring(1);

// 		document.getElementById(blockID).scrollIntoView({
// 			behavior: 'smooth',
// 			block: 'start'
// 		})
// 	})
// })


// $(document).ready(function () {
//     screenCheck();

//     $('.scroll-control .one').click(function () {
//         $.scrollify.move('#s-one');
//     });
//     $('.scroll-control .two').click(function () {
//         $.scrollify.move('#s-two');
//     });
//     $('.scroll-control .three').click(function () {
//         $.scrollify.move('#s-three');
//     });
// });

// $(window).on('resize', function () {
//     screenCheck();
// });

// function applyScroll() {
//     $.scrollify({
//         section: '.scroll',
//         sectionName: 'section-name',
//         // standardScrollElements: 'section',
//         easing: 'easeOutExpo',
//         scrollSpeed: 1100,
//         offset: 0,
//         scrollbars: true,
//         setHeights: true,
//         overflowScroll: true,
//         updateHash: false,
//         touchScroll: true,
//     });
// }

// function screenCheck() {
//     var deviceAgent = navigator.userAgent.toLowerCase();
//     var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
//     if (agentID || $(window).width() <= 1024) {
//         // its mobile screen
//         $.scrollify.destroy();
//         $('section').removeClass('scroll').removeAttr('style');
//         $.scrollify.disable();
//     } else {
//         // its desktop
//         $('section').addClass('scroll');
//         applyScroll();
//         $.scrollify.enable();
//     }
// }

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  btnUp.addEventListener();