import './style.css'
import 'flowbite'

const profileData = [
  {
    "name": "Ritika",
    "age": 34,
    "tagline": "Warm, thoughtful and loves poetry",
    "location": "Vishakhapatnam, Andhra Pradesh",
    "avatar": "https://i.pravatar.cc/150?img=47",
    "description": "A grounded and creative soul, Ritika enjoys calm evenings, soulful music and meaningful conversations.",
    "hobbies": [
      {
        "title": "Poetry",
        "description": "Writes and recites Hindi and Urdu verses during open mic nights"
      },
      {
        "title": "Badminton",
        "description": "Plays recreationally with friends every weekend"
      },
      {
        "title": "Spirituality",
        "description": "Practices meditation and reads spiritual literature regularly"
      },
      {
        "title": "Long Walks",
        "description": "Enjoys early morning walks in city parks"
      }
    ]
  },
  {
    "name": "Sneha",
    "age": 31,
    "tagline": "Spiritual, grounded and ready for her next chapter",
    "location": "Mumbai, Maharashtra",
    "avatar": "https://i.pravatar.cc/150?img=48",
    "description": "Sneha is rooted in values, loves connecting with people and believes in lifelong learning.",
    "hobbies": [
      {
        "title": "Volunteering",
        "description": "Active in local community kitchens and NGO events"
      },
      {
        "title": "Classical Music",
        "description": "Learns Hindustani vocals from a private tutor"
      },
      {
        "title": "Reading",
        "description": "Avid reader of spiritual biographies and memoirs"
      }
    ]
  },
  {
    "name": "Pavithra",
    "age": 35,
    "tagline": "Loves long walks, strategy games and filter coffee",
    "location": "Bangalore, Karnataka",
    "avatar": "https://i.pravatar.cc/150?img=49",
    "description": "An introverted extrovert who enjoys deep conversations, nature and slow living.",
    "hobbies": [
      {
        "title": "Road Trips",
        "description": "Often escapes on spontaneous weekend drives to the hills"
      },
      {
        "title": "Filter Coffee",
        "description": "A self-proclaimed connoisseur who brews her own every morning"
      },
      {
        "title": "Board Games",
        "description": "Hosts monthly strategy game nights with close friends"
      }
    ]
  }
];

// Function to render profile cards
function renderProfiles() {
  const profilesContainer = document.getElementById('profiles-container');
  
  profileData.forEach((profile, index) => {
    const card = document.createElement('div');
    card.className = 'bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300';
    card.innerHTML = `
      <div class="flex flex-col items-center py-6 px-4">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="${profile.avatar}" alt="${profile.name}">
        <h5 class="mb-1 text-xl font-medium text-gray-900">${profile.name}</h5>
        <span class="text-sm text-gray-500">${profile.age}</span>
      </div>
      <div class="p-5 border-t border-gray-200">
        <p class="mb-2 font-medium text-gray-900">Hobbies</p>
        <ul class="space-y-2">
          ${profile.hobbies.slice(0, 2).map(hobby => `
            <li>
              <span class="font-medium">${hobby.title}:</span> ${hobby.description.substring(0, 60)}${hobby.description.length > 60 ? '...' : ''}
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="px-5 py-4 bg-gray-50">
        <p class="text-gray-700">${profile.location}</p>
        <p class="text-sm text-gray-600 italic">${profile.tagline}</p>
      </div>
    `;

    card.setAttribute("data-modal-target", "profile-modal");
    card.setAttribute("data-modal-toggle", "profile-modal");
    
    card.addEventListener('click', () => openProfileModal(profile));
    
    profilesContainer.appendChild(card);
  });
}

// Function to set modal content
function openProfileModal(profile) {
  const modal = document.getElementById('profile-modal');
  
  // Set modal content
  document.getElementById('modal-name').textContent = `${profile.name}, ${profile.age}`;
  document.getElementById('modal-avatar').src = profile.avatar;
  document.getElementById('modal-avatar').alt = profile.name;
  document.getElementById('modal-location').textContent = profile.location;
  document.getElementById('modal-tagline').textContent = profile.tagline;
  document.getElementById('modal-description').textContent = profile.description;
  
  // Set hobbies
  const hobbiesContainer = document.getElementById('modal-hobbies');
  hobbiesContainer.innerHTML = '';
  
  profile.hobbies.forEach(hobby => {
    const li = document.createElement('li');
    li.className = 'pb-3 border-b border-gray-200 last:border-0';
    li.innerHTML = `
      <div class="font-medium text-gray-900">${hobby.title}</div>
      <div class="text-gray-600">${hobby.description}</div>
    `;
    hobbiesContainer.appendChild(li);
  });
  
  // Show modal
  //const modalElement = document.getElementById('profile-modal');
  //const modalInstance = new window.Flowbite.Modal(modalElement);
  //modalInstance.show();
}

document.addEventListener('DOMContentLoaded', () => {
  renderProfiles();
});

