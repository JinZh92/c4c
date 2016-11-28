(function(){
	'use strict'

	angular
		.module('c4cApp')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['HomeSrv', 'heroImgResolve', 'photoResolve'];

	function HomeController(HomeSrv, heroImgResolve, photoResolve){
		var ctrl = this;

		ctrl.joinusname;
		ctrl.joinusemail;
		ctrl.showjoinus = true;
		ctrl.photonumber = 12;
		ctrl.totalphotonumber = photoResolve.length;
		ctrl.contactusname;
		ctrl.contactusemail;
		ctrl.contactusmsg;
		ctrl.showcontactus = true;
		
		ctrl.joinUs = joinUs;
		ctrl.showMorePhotos = showMorePhotos;
		ctrl.showLessPhotos = showLessPhotos;
		ctrl.contactUs = contactUs;


		// Hero Images
		// ctrl.slides = [
		// 	{url: "assets/img/herophotos/coverphoto1.jpg", id: 0},
		// 	{url: "assets/img/herophotos/coverphoto2.jpg", id: 1},
		// 	{url: "assets/img/herophotos/coverphoto3.jpg", id: 2}
		// ];
		console.log('heroresolve',heroImgResolve);
		console.log('photoresolve',photoResolve);
		
		ctrl.slides = heroImgResolve.map(function(hero, index){
			return {
				url: 'assets/img/herophotos/' + hero,
				id: index
			}
		});

		ctrl.photos = photoResolve.map(function(photo, index){
			return {
				url: 'assets/img/photos/' + photo,
				id: index
			}
		});

		// Event Calendar and Configurations
		ctrl.uiConfig = {
			calendar: {
				googleCalendarApiKey: 'AIzaSyBxCG3J4qilz-6XujSQtXdXATylmXtzpc4',
				defaultView: 'agendaWeek',
				allDaySlot: false,
				minTime: '11:00:00',
				maxTime: '23:00:00',
				slotDuration: '01:00:00',
				slotLabelInterval: '02:00:00',
				contentHeight: 287,
				editable: false,
				header: {
					left: 'month agendaWeek agendaDay',
					center: '',
					right: 'today prev,next'
				}
			}
		}
		ctrl.eventSources = [
			{
				googleCalendarId: '54dhdausv4k5ob57jrjch3f550@group.calendar.google.com',
				color: 'green',
				backgroundColor: 'blue',
				borderColor: 'yellow',
				textColor: 'red'
			}
		];

		function joinUs(){
			HomeSrv.addToSheet(ctrl.joinusname, ctrl.joinusemail);
			ctrl.showjoinus = false;
		}

		function showMorePhotos(){
			if (ctrl.photonumber <= ctrl.totalphotonumber) {
				ctrl.photonumber += 12;
			}
		}

		function showLessPhotos(){
			ctrl.photonumber = 12;
		}

		function contactUs(){
			HomeSrv.sendEmail(ctrl.contactusname, ctrl.contactusemail, ctrl.contactusmsg);
			ctrl.showcontactus = false;
		}
		console.log("Controller Loaded")
	}
})();