import { Component, OnInit } from '@angular/core';

export interface user {
  id: number;
  name: string;
  rating: number;
  description: string;
  price: number;
  discount: number;
  images: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedRole: any;
  filterByName = '';
  filterById = '';
  users: user[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      rating: 4.5,
      description:
        'Experience high-quality sound with these wireless headphones.',
      price: 59.99,
      discount: 10,
      images: '../../assets/wireless.jpeg',
    },
    {
      id: 2,
      name: 'Smart Watch',
      rating: 4.2,
      description:
        'Stay connected and track your fitness with this smart watch.',
      price: 99.99,
      discount: 20,
      images: '../../assets/smartwatch.jpeg',
    },
    {
      id: 3,
      name: 'Portable Charger',
      rating: 4.8,
      description:
        'Keep your devices charged on-the-go with this portable charger.',
      price: 29.99,
      discount: 5,
      images: '../../assets/portabble.jpeg',
    },
    {
      id: 4,
      name: 'Wireless Speaker',
      rating: 4.4,
      description: 'Enjoy your music anywhere with this wireless speaker.',
      price: 79.99,
      discount: 15,
      images: '../../assets/speaker.jpeg',
    },
    {
      id: 5,
      name: 'Gaming Mouse',
      rating: 4.7,
      description:
        'Improve your gaming performance with this high-quality gaming mouse.',
      price: 49.99,
      discount: 10,
      images: '../../assets/gamingmouse.jpeg',
    },
    {
      id: 6,
      name: 'Fitness Tracker',
      rating: 4.3,
      description:
        'Track your fitness goals and stay motivated with this fitness tracker.',
      price: 69.99,
      discount: 10,
      images: '../../assets/fitnessmoniter.jpeg',
    },
    {
      id: 7,
      name: 'Smart Thermostat',
      rating: 4.6,
      description: 'Save money on your energy bill with this smart thermostat.',
      price: 149.99,
      discount: 25,
      images: '../../assets/fastthermostat.jpeg',
    },
    {
      id: 8,
      name: 'Wireless Earbuds',
      rating: 4.1,
      description: 'Listen to your music in style with these wireless earbuds.',
      price: 39.99,
      discount: 5,
      images: '../../assets/Earbuds.jpeg',
    },
    {
      id: 9,
      name: 'Action Camera',
      rating: 4.9,
      description:
        'Capture all your adventures with this high-quality action camera.',
      price: 129.99,
      discount: 20,
      images: '../../assets/camera.jpeg',
    },
    {
      id: 10,
      name: 'Virtual Assistant',
      rating: 4.0,
      description: 'Make your life easier with this virtual assistant.',
      price: 199.99,
      discount: 30,
      images: '../../assets/virtual.jpeg',
    },
    {
      id: 11,
      name: 'Wireless Charging Pad',
      rating: 4.6,
      description:
        'Charge your phone without cables with this wireless charging pad.',
      price: 19.99,
      discount: 5,
      images: '../../assets/chargingpad.jpeg',
    },
    {
      id: 12,
      name: 'Bluetooth Receiver',
      rating: 4.3,
      description: 'Upgrade your old stereo with this Bluetooth receiver.',
      price: 29.99,
      discount: 10,
      images: '../../assets/bluetoothreceiver.jpeg',
    },
    {
      id: 13,
      name: 'Wireless Router',
      rating: 4.5,
      description:
        'Get a faster and more reliable internet connection with this wireless router.',
      price: 79.99,
      discount: 15,
      images: '../../assets/wirelessrouter.jpeg',
    },
    {
      id: 14,
      name: 'External Hard Drive',
      rating: 4.7,
      description:
        'Keep all your important files backed up with this external hard drive.',
      price: 129.99,
      discount: 20,
      images: '../../assets/harddrive.jpeg',
    },
    {
      id: 15,
      name: 'Smart Scale',
      rating: 4.2,
      description:
        'Track your weight and body composition with this smart scale.',
      price: 49.99,
      discount: 10,
      images: '../../assets/smartscale.jpeg',
    },
    {
      id: 16,
      name: 'Wireless Keyboard',
      rating: 4.4,
      description:
        'Improve your typing experience with this wireless keyboard.',
      price: 39.99,
      discount: 5,
      images: '../../assets/wirelesskeyboard.jpeg',
    },
    {
      id: 17,
      name: 'Smart Plug',
      rating: 4.8,
      description: 'Control your appliances remotely with this smart plug.',
      price: 24.99,
      discount: 5,
      images: '../../assets/smartplug.jpeg',
    },
    {
      id: 18,
      name: 'Noise Cancelling Headphones',
      rating: 4.9,
      description:
        'Block out distractions and focus on your work with these noise cancelling headphones.',
      price: 129.99,
      discount: 15,
      images: '../../assets/noise.jpeg',
    },
    {
      id: 19,
      name: 'Wireless Mouse',
      rating: 4.1,
      description: 'Get rid of the clutter of cords with this wireless mouse.',
      price: 19.99,
      discount: 10,
      images: '../../assets/wirelessmouse.jpeg',
    },
    {
      id: 20,
      name: 'Bluetooth Headset',
      rating: 4.0,
      description:
        'Make and receive calls hands-free with this Bluetooth headset.',
      price: 49.99,
      discount: 5,
      images: '../../assets/blueheadset.jpeg',
    },
    {
      id: 21,
      name: 'Smart Geyser',
      rating: 4.5,
      description: 'Save energy and reduce your bills with this smart Geyser.',
      price: 199.99,
      discount: 20,
      images: '../../assets/smart geyser.jpeg',
    },
    {
      id: 22,
      name: 'Smart GPS Tracker',
      rating: 4.1,
      description: 'Track your loved ones with this Smart GPS Tracker.',
      price: 79.99,
      discount: 10,
      images: '../../assets/tracker.jpeg',
    },
    {
      id: 23,
      name: 'Electric Toothbrush',
      rating: 4.8,
      description:
        'Get a thorough clean for your teeth and gums with this electric toothbrush.',
      price: 89.99,
      discount: 15,
      images: '../../assets/brush.jpeg',
    },
    {
      id: 24,
      name: 'Smart Doorbell',
      rating: 4.6,
      description:
        "See who's at your door from your phone with this smart doorbell.",
      price: 149.99,
      discount: 10,
      images: '../../assets/doorbell.jpeg',
    },
    {
      id: 25,
      name: 'Wireless Earphones',
      rating: 4.3,
      description:
        'Listen to your music without tangled wires with these wireless earbuds.',
      price: 99.99,
      discount: 5,
      images: '../../assets/wirelessearphones.png',
    },
    {
      id: 26,
      name: 'Smartwatch',
      rating: 4.7,
      description:
        'Stay connected and track your fitness with this smartwatch.',
      price: 299.99,
      discount: 15,
      images: '../../assets/smartwatch.jpeg',
    },
    {
      id: 27,
      name: 'Wireless Speaker',
      rating: 4.4,
      description:
        'Enjoy high-quality sound without the need for wires with this wireless speaker.',
      price: 129.99,
      discount: 10,
      images: '../../assets/wirelessspeaker.jpeg',
    },
    {
      id: 28,
      name: 'Streaming Device',
      rating: 4.2,
      description:
        'Stream your favorite movies and shows on your TV with this streaming device.',
      price: 59.99,
      discount: 5,
      images: '../../assets/streamingdevice.jpeg',
    },
    {
      id: 29,
      name: 'Air Purifier',
      rating: 4.9,
      description:
        'Breathe cleaner air with this air purifier that removes allergens and pollutants.',
      price: 199.99,
      discount: 20,
      images: '../../assets/air.jpeg',
    },
    {
      id: 30,
      name: 'Smart Camera',
      rating: 4.5,
      description:
        'Keep an eye on your home or office from anywhere with this smart camera.',
      price: 99.99,
      discount: 10,
      images: '../../assets/camera.jpeg',
    },
  ];
  filteredArray: any = this.users;

constructor(){ }

  selectRole(role: string) {
    this.selectedRole = role;
  }

  ngOnInit(): void {}
  edit(user: any) {
    console.log(`Editing ${user.name}`);
  }

  view(user: any) {
    console.log(`Viewing ${user.name}`);
  }

  delete(user: any) {
    console.log(`Deleting ${user.name}`);
  }
  filter() {
      console.log(this.users.forEach(x => console.log(x.id)))
    this.filteredArray = this.users.filter((x) =>
      x.name.toLocaleLowerCase().includes(this.filterByName.toLocaleLowerCase())
    );
  }
}
// ngOnInit(): void {}
// public addUser(user: any) {
//   console.log(user);
// }
// public editUser(user: any) {
//   console.log(user);
// }
// public deleteUser(user: any) {
//   console.log(user);
// }
