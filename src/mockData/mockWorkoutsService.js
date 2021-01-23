
/* 
    I would normally get data from some kind of API insted of it being static resources in the public folder.
    So I like to simulate asynchronus api calls if needed that way all I have to do is change the inside of this method and
    I know the apps not going to blow up when it hits a real api. 
*/
export const getWorkouts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockWorkouts)
        }, 200)
    })
}

const mockWorkouts = [
    {
        thumbUri: '/images/lake-inniscarra-thumb.jpg',
        title: 'Lake Inniscarra, Ireland- Pyramid',
        time: '30:53',
        distance: '6,248 M',
        trainer: {
            iconImageUri: '/images/lake-inniscarra-trainer.jpg'
        },
        details: {},
    },
    {
        thumbUri: '/images/performance-series-thumb.jpg',
        title: 'Performance Series',
        trainer: {
            iconImageUri: '/images/performance-series-trainer.jpg'
        },
        details: {},
        workouts: 9
    },
    {
        thumbUri: '/images/slow-pulls-thumb.jpg',
        title: 'Slow Pulls and Fast Intervals',
        time: '44:13',
        distance: '9,948 M',
        trainer: {
            iconImageUri: '/images/slow-pulls-trainer.jpg'
        },
        details: {},
    },
    {
        thumbUri: '/images/20-minutes-to-toned-thumb.jpg',
        title: '20 Minutes to Toned',
        trainer: {
            iconImageUri: '/images/20-minutes-to-toned-trainer.jpg'
        },
        details: {},
        workouts: 12
    },
    {
        thumbUri: '/images/charles-rase-thumb.jpg',
        title: 'Charles Race, Boston, Massachusetts',
        meta: {
            time: '36:22',
            distance: '8,648 M'
        },
        trainer: {
            iconImageUri: '/images/charles-race-trainer.jpg'
        },
        details: {},
    },
    {
        thumbUri: '/images/full-body-hiit-thumb.jpg',
        title: 'Full-Body HIIT Series',
        trainer: {
            iconImageUri: '/images/full-body-hiit-trainer.jpg'
        },
        details: {},
    },
    {
        thumbUri: '/images/kafue-river-thumb.jpg',
        title: 'Kafue River, Zambia- Power Strike Pyramid',
        time: '22:22',
        distance: '4,660 M',
        trainer: {
            iconImageUri: '/images/kafue-river-trainer.jpg'
        },
        details: {},
    },
    {
        thumbUri: '/images/shred-and-burn-thumb.jpg',
        title: 'Shred & Burn Series',
        trainer: {
            iconImageUri: '/images/shred-and-burn-trainer.jpg'
        },
        details: {},
        workouts: 16
    },
]