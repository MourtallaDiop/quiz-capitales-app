// quizData.js

const quizData = [
    {
        continent: "Europe",
        questions: [
            { id: 1, pays: "France", capitale: "Paris", options_fausses: ["Berlin", "Rome", "Madrid"] },
            { id: 2, pays: "Allemagne", capitale: "Berlin", options_fausses: ["Vienne", "Bruxelles", "Amsterdam"] },
            { id: 3, pays: "Italie", capitale: "Rome", options_fausses: ["Lisbonne", "Athènes", "Oslo"] },
            { id: 4, pays: "Espagne", capitale: "Madrid", options_fausses: ["Barcelone", "Séville", "Lisbonne"] },
            { id: 5, pays: "Royaume-Uni", capitale: "Londres", options_fausses: ["Dublin", "Édimbourg", "Cardiff"] },
            { id: 6, pays: "Belgique", capitale: "Bruxelles", options_fausses: ["Anvers", "Gand", "Rotterdam"] },
            { id: 7, pays: "Suisse", capitale: "Berne", options_fausses: ["Zurich", "Genève", "Bâle"] },
            { id: 8, pays: "Autriche", capitale: "Vienne", options_fausses: ["Salzbourg", "Prague", "Budapest"] },
            { id: 9, pays: "Portugal", capitale: "Lisbonne", options_fausses: ["Porto", "Madrid", "Séville"] },
            { id: 10, pays: "Grèce", capitale: "Athènes", options_fausses: ["Thessalonique", "Istanbul", "Rome"] },
            { id: 11, pays: "Pays-Bas", capitale: "Amsterdam", options_fausses: ["La Haye", "Bruxelles", "Berlin"] },
            { id: 12, pays: "Pologne", capitale: "Varsovie", options_fausses: ["Cracovie", "Prague", "Bratislava"] }
        ]
    },
    {
        continent: "Afrique",
        questions: [
            { id: 13, pays: "Sénégal", capitale: "Dakar", options_fausses: ["Accra", "Abuja", "Nairobi"] },
            { id: 14, pays: "Nigeria", capitale: "Abuja", options_fausses: ["Lagos", "Le Caire", "Rabat"] },
            { id: 15, pays: "Égypte", capitale: "Le Caire", options_fausses: ["Alexandrie", "Khartoum", "Tunis"] },
            { id: 16, pays: "Afrique du Sud", capitale: "Pretoria", options_fausses: ["Le Cap", "Johannesburg", "Durban"] },
            { id: 17, pays: "Maroc", capitale: "Rabat", options_fausses: ["Casablanca", "Marrakech", "Alger"] },
            { id: 18, pays: "Kenya", capitale: "Nairobi", options_fausses: ["Mombasa", "Kampala", "Dar es Salam"] },
            { id: 19, pays: "Ghana", capitale: "Accra", options_fausses: ["Kumasi", "Lagos", "Monrovia"] },
            { id: 20, pays: "Éthiopie", capitale: "Addis-Abeba", options_fausses: ["Nairobi", "Khartoum", "Djibouti"] },
            { id: 21, pays: "Angola", capitale: "Luanda", options_fausses: ["Kinshasa", "Brazzaville", "Maputo"] },
            { id: 22, pays: "Algérie", capitale: "Alger", options_fausses: ["Oran", "Rabat", "Tunis"] }
        ]
    },
    {
        continent: "Asie",
        questions: [
            { id: 23, pays: "Japon", capitale: "Tokyo", options_fausses: ["Séoul", "Pékin", "Bangkok"] },
            { id: 24, pays: "Inde", capitale: "New Delhi", options_fausses: ["Mumbai", "Islamabad", "Katmandou"] },
            { id: 25, pays: "Thaïlande", capitale: "Bangkok", options_fausses: ["Hanoï", "Manille", "Kuala Lumpur"] },
            { id: 26, pays: "Chine", capitale: "Pékin", options_fausses: ["Shanghai", "Hong Kong", "Séoul"] },
            { id: 27, pays: "Corée du Sud", capitale: "Séoul", options_fausses: ["Pyongyang", "Tokyo", "Busan"] },
            { id: 28, pays: "Indonésie", capitale: "Jakarta", options_fausses: ["Kuala Lumpur", "Manille", "Hanoi"] },
            { id: 29, pays: "Vietnam", capitale: "Hanoï", options_fausses: ["Ho Chi Minh-Ville", "Vientiane", "Bangkok"] },
            { id: 30, pays: "Malaisie", capitale: "Kuala Lumpur", options_fausses: ["Singapour", "Jakarta", "Manille"] },
            { id: 31, pays: "Philippines", capitale: "Manille", options_fausses: ["Cebu", "Hanoi", "Jakarta"] },
            { id: 32, pays: "Turquie", capitale: "Ankara", options_fausses: ["Istanbul", "Izmir", "Athènes"] }
        ]
    },
    {
        continent: "Amériques", 
        questions: [
            { id: 33, pays: "Canada", capitale: "Ottawa", options_fausses: ["Toronto", "Vancouver", "Montréal"] },
            { id: 34, pays: "Brésil", capitale: "Brasilia", options_fausses: ["Rio de Janeiro", "Sao Paulo", "Buenos Aires"] },
            { id: 35, pays: "Argentine", capitale: "Buenos Aires", options_fausses: ["Santiago", "Montevideo", "Lima"] },
            { id: 36, pays: "États-Unis", capitale: "Washington, D.C.", options_fausses: ["New York", "Los Angeles", "Chicago"] },
            { id: 37, pays: "Mexique", capitale: "Mexico", options_fausses: ["Guadalajara", "Monterrey", "La Havane"] },
            { id: 38, pays: "Chili", capitale: "Santiago", options_fausses: ["Valparaíso", "Lima", "Buenos Aires"] },
            { id: 39, pays: "Pérou", capitale: "Lima", options_fausses: ["Cusco", "Quito", "Bogota"] },
            { id: 40, pays: "Colombie", capitale: "Bogota", options_fausses: ["Medellín", "Caracas", "Quito"] },
            { id: 41, pays: "Cuba", capitale: "La Havane", options_fausses: ["Santiago de Cuba", "Kingston", "San Juan"] },
            { id: 42, pays: "Jamaïque", capitale: "Kingston", options_fausses: ["Montego Bay", "Nassau", "Bridgetown"] }
        ]
    },
    {
        continent: "Océanie",
        questions: [
            { id: 43, pays: "Australie", capitale: "Canberra", options_fausses: ["Sydney", "Melbourne", "Wellington"] },
            { id: 44, pays: "Nouvelle-Zélande", capitale: "Wellington", options_fausses: ["Auckland", "Christchurch", "Suva"] },
            { id: 45, pays: "Fidji", capitale: "Suva", options_fausses: ["Nadi", "Apia", "Port-Vila"] },
            { id: 46, pays: "Papouasie-Nouvelle-Guinée", capitale: "Port Moresby", options_fausses: ["Honiara", "Suva", "Nouméa"] },
            { id: 47, pays: "Samoa", capitale: "Apia", options_fausses: ["Pago Pago", "Suva", "Nukuʻalofa"] },
            { id: 48, pays: "Tonga", capitale: "Nukuʻalofa", options_fausses: ["Apia", "Suva", "Honiara"] },
            { id: 49, pays: "Vanuatu", capitale: "Port-Vila", options_fausses: ["Suva", "Nouméa", "Papeete"] },
            { id: 50, pays: "Îles Salomon", capitale: "Honiara", options_fausses: ["Port Moresby", "Suva", "Apia"] },
            { id: 51, pays: "Kiribati", capitale: "Tarawa-Sud", options_fausses: ["Nadi", "Funafuti", "Apia"] },
            { id: 52, pays: "Tuvalu", capitale: "Funafuti", options_fausses: ["Apia", "Tarawa-Sud", "Nukuʻalofa"] }
        ]
    }
];