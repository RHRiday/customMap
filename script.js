function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 22.33808648430366,
			lng: 91.78683790978684,
		},
		zoom: 17,
		mapId: '476d022a1a223c94',
		mapTypeControl: true,
		fullscreenControl: false,
		streetViewControl: false,
	});

	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
	const markers = [
		[
			"RHRiday's House",
			22.336738280224676, 91.78770087522804,
			'yoshi_house.svg',
			38,
			31,
		],
		[
			'You Are Here',
			22.336558226143534, 91.78275024236284,
			'pointer.svg',
			30,
			47.8,
		],
		[
			'Ghost House',
			22.336337418579255, 91.78678963002844,
			'ghosthouse.svg',
			40,
			48,
		],
		['Castle', 22.339465873836108, 91.79043206980907, 'castle.svg', 40, 53],
		['Warp Pipe', 22.339059007253145, 91.78506767091449, 'pipe.svg', 38, 42.5],
		['Star World', 22.336052107932158, 91.7904857139885, 'star.svg', 38, 38],
		[
			'Donut Plains',
			22.340666626275834, 91.78162369554563,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			22.3398528943469, 91.78168806856094,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			22.337987249412347, 91.7800787622269,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}
