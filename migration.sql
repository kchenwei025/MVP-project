Drop table if EXISTS students, post;

Create table students (
    id serial,
    name text,
    introduction text,
    whereFrom text,
    whySoftwareEngineering text,
    techInterest text,
    hobbies text,
    favoriteMovies text,
    favoriteQuote text,
    favoriteBook text,
    InterestingFacts text
);

--  name,introduction,whereFrom,whySoftwareEngineering,techInterest,Hobbies,favoriteMovies,favoriteQuote,InterestingFacts


Create table post (
    id serial,
    post_time TIME,
    post_content TEXT,
    students_id INTEGER
);

    
INSERT INTO students (
    name ,
    introduction ,
    whereFrom ,
    whySoftwareEngineering ,
    techInterest ,
    Hobbies ,
    favoriteMovies ,
    favoriteBook,
    favoriteQuote ,
    InterestingFacts ) VALUES 
    ('Tayla Enns' , 
    'Hey everyone! Excited to be here and learn/grow with all of you! I was born and raised in Central California. Although, since joining the Navy, I''ve lived in many states and countries. I currently reside on the east coast in VA. ' ,
    'Central California', 
    'I''ve spent the past 5 years working in Avonics, which deals a lot with electronics and mechanics. I plan to further my education in the mechatronics engineering field, which includes electronics, mechanics and software. The computer science field has always drawn my attention and fortunately enough, I came across galvanize''s level up program as an option to get ahead on my education plans and career path. I''m stoked to be in this cohort and hear about everyone''s past experience and future goal paths! Hopefully we can network and all grow together!', 
    'App development(iOS/swift specific), Web Dev, and Artificial Intelligence',
    'I love doing anything active, lifting, surfing, snowboarding, hiking, wakeboarding, skating, outdoor sports, and the list goes on! I enjoy traveling and learning about other cultures. I most likely always have a random weekly/monthly mind stimulating fixation, right now that fixation is solving Rubik''s cubes LOL ', 
    'Back to the future',
    '212 The Extra Degree, The Four Agreements',
    'Comparison is the thief of Joy - Theodore Roosevelt',
    '1.I lived in South Korea for a year 2.I have my sUAS pilot license 3.I''ve seen the top of Mount Fugi from a helicopter view (I love to fly)'
    );
INSERT INTO students (
    name ,
    introduction ,
    whereFrom ,
    whySoftwareEngineering ,
    techInterest ,
    Hobbies ,
    favoriteMovies ,
    favoriteBook,
    favoriteQuote ,
    InterestingFacts ) VALUES 
    ('Tim Galloway' , 
    'Good morning/afternoon,I am Tim Galloway and I am excited to be going on this coding adventure with everyone. I am originally from Belvidere, Illinois. Since joining the Air Force in 2003, I have called many place home. I''m not back in Illinois on Scott Air Force Base as I await my final retirement date of 1 September.  
 ',
    'Belvidere Illinois', 
    'I am a paralegal by trade and have a bachelors and Masters Degree in Criminal Justice. However, my passion has always been finding innovative ways to streamline processes and make them more efficient. I''ve created two Adobe Designer documents that create forms based upon user inputs. These forms are utilized across the Air Force and are pending publishing on the AF E-Publishing site. I''ve also been interested in data management, analysis, and organization. I built two SharePoint sites for this. One is used to track internal files, organize them by name, adds meta tags for tracking and disposal purposes. The other tracks all enlisted and installation legal office data points to track training, readiness, and manning areas. This one was adopted by our entire career field for Active, Guard, and Reserves in the Air Force. ',
    'I love app design and website creation. I also enjoy watching videos on all the Microsoft programs to learn on what aspects of their programs that I''m not utilizing. ', 
    'I love to BBQ, do wood working, play video games, and of course spend time with my wife, three kids, and 2 dogs. ',
    'Twister, Kingdom of Heaven, Step Brothers, and really any comedy or action movie. ',
    'I''m not a big reader. I think the fact that 90% of my job as a paralegal is reading and research is what kinda drove me away from it. I have done the book on tapes for General Powells book and Dare to Lead by Brené Brown. ',
    'What man is a man (or person) who doesn''t try to make the world a better place',
    '1.I am an avid Steelers fan and have many items of memorabilia to include a tattoo.  2.I once guarded as Sadam Hussein when he was getting medical care during his trial.  3.I have a BBQ IG channel.'
    );

INSERT INTO students (
    name,
    introduction,
    whereFrom,
    whySoftwareEngineering,
    techInterest,
    Hobbies,
    favoriteMovies,
    favoriteBook,
    favoriteQuote,
    InterestingFacts
) VALUES (
    'Ronald Miller',
    'I am from a very small town in northern Idaho. I joined the Air Force in 2014 and spent my first 5 years stationed in Nebraska, followed by 2 ½ years stationed in the United Kingdom.',
    'Idaho',
    'I have always been very interested in computers and technology as a whole, I''ve been building computers since I was a little kid and I''ve taken apart plenty of electronics for fun. Fixing cell phones is actually a really fun hobby to me. I''m pretty comfortable with computer hardware, however I''ve always thought I was lacking as far as software goes and I decided it''s about time I finally buckled down and learned how to code!',
    'Video games, AI',
    'Playing games, reading, building computers, fixing phones, gym and physical fitness',
    'Bladerunner 2049, Forrest Gump, Ghost in the Shell, The Lord of the Rings trilogy, Scarface, Goodfellas, The Wolf of WallStreet, The Pursuit of Happiness',
    'The Name of the Wind - Patrick Rothfuss, A Song of Ice and Fire, all five books - George R. R. Martin, The Night Angel trilogy - Brent Weeks',
    'I see now that the circumstances of one''s birth are irrelevant, it is what we do with the gift of life that determines who we are. - Mew Two, Pokémon',
    'I once had a sock collection that valued around $600; My great grandfather''s great grandfather was Asa Candler, the original founder of the Coca-Cola company; I am terrified of spiders and mice.'
);
INSERT INTO students (
    name,
    introduction,
    whereFrom,
    whySoftwareEngineering,
    techInterest,
    Hobbies,
    favoriteMovies,
    favoriteBook,
    favoriteQuote,
    InterestingFacts
) VALUES (
    'Shu Luo',
    'I am originally from China. I am currently stationed at Fort Wainwright, AK, and plan to move to Atlanta, GA.',
    'China',
    'I like data analysis, and there are a lot of algorithms for advanced data processing in the computer science field. I’d like to learn not only how to apply them, but also how to build them from scratch. I often used R (an open-source statistical software) for data analysis. There are a lot of modules built by individual software engineers, for a better way of calculation. I really want to learn and write my own module for the community one day.',
    'Pattern recognition, app/web development',
    'Hiking, watching sports games, spending time with family',
    'The Shawshank Redemption, Scent of a Woman, The Dark Knight Trilogy, Let the Bullets Fly, The Grandmaster',
    'Thinking, Fast and Slow; Guns, Germs, and Steel',
    '“She was still too young to know that life never gives anything for nothing, and that a price is always expected for what fate bestows.\" - Stefan Zweig, Marie Antoinette: The Portrait of an Average Woman',
    'I was raised in a city with more than 10 million population; I speak Mandarin; I have been to 15 different National Parks.'
);
INSERT INTO students (
    name,
    introduction,
    whereFrom,
    whySoftwareEngineering,
    techInterest,
    Hobbies,
    favoriteMovies,
    favoriteBook,
    favoriteQuote,
    InterestingFacts
)
VALUES (
    'Joseph Carmeli',
    'I am excited to learn with everyone!',
    'Minnesota',
    'I like problem solving and always having something new to learn. I feel like in this field I will always be learning and researching, therefore never get bored.',
    'App/web development',
    'Working out and running are my main hobbies. I also enjoy playing video games and hiking.',
    'Lord Of The Rings',
    'Rich Dad Poor Dad',
    '"It is during our darkest moments that we must focus to see the light." - Aristotle',
    '1. I lived in Israel for three years. 2. I spent two weeks camping in the boundary waters canoeing. 3. I have five siblings.'
);

INSERT INTO students (
    name,
    introduction,
    whereFrom,
    whySoftwareEngineering,
    techInterest,
    Hobbies,
    favoriteMovies,
    favoriteBook,
    favoriteQuote,
    InterestingFacts
)
VALUES (
    'Darrin Mosher',
    'Hello',
    'Spokane, Washington PNW',
    'The desire to educate myself has brought me here. The progress and future in my current field is reaching diminishing returns.',
    'I''m interested in learning more of the basics behind computer science; learning why and how the ones and zeros make the world go ''round.',
    'I enjoy the classic ''nerd'' hobbies. My wife and I spend most of our free time playing D&D, MTG, and table-top games. We don''t play many video games though.',
    'Anything with James Spader, Anthony Hopkins, Kevin Spacey. I like Archer and Breaking Bad as well.',
    'The First Law trilogy by Joe Abercrombie',
    '''Gaslighting doesn''t exist. You made it up ''cause you''re freaking crazy.''',
    '1. I''m married with no children. 2. I adopted my first dog at the age of 27. 3. My wife and I finished a D&D campaign last night that has spanned over a year and a half.'
);
INSERT INTO students (
    name,
    introduction,
    whereFrom,
    whySoftwareEngineering,
    techInterest,
    Hobbies,
    favoriteMovies,
    favoriteBook,
    favoriteQuote,
    InterestingFacts
) VALUES (
    'Phillip Sussman',
    'I currently live in Tucson, AZ with my Wife & Son, but was born in Brazil. Grew up in SoCal as well.',
    'Tucson, AZ',
    'I have always had an interest in software development and coding in general. I am passionate about problem solving and troubleshooting. It definitely feels good to solve problems and get something up and running. I also used to watch hacker movies when I was in High School, and it really sparked my interest in it then for sure.',
    'Software development, making apps, and having a working piece of software that can make life easier.',
    'I like flying my RC Airplanes, and I like my guns and going shooting at the range.',
    'Back to the Future, Prisoners',
    'Hunger Games, The Martian',
    '"You''ll never know what you can''t achieve until you don''t achieve it." - from 21 Jump Street',
    '1. I have a 6-month-old Son & a chunky pug. 2. I went to school for music production. 3. I am so close to getting my pilot''s license.'
);
INSERT INTO students (
    name,
    introduction,
    whereFrom,
    whySoftwareEngineering,
    techInterest,
    Hobbies,
    favoriteMovies,
    favoriteBook,
    favoriteQuote,
    InterestingFacts
) VALUES (
    'Phillip Mejia',
    'Pleasure to meet everyone! Looking forward to learning and working with all of you. I''m from Savannah, GA',
    'Savannah, GA',
    'I''ve spent a great deal of my professional life in the medical field. I''m fortunate enough to have a good friend who is a software developer, and he encouraged me to become one too when I told him I wanted to change careers. I truly have a passion for learning and utilizing logic to solve problems. I also am attracted to the notion of being able to design and build useful products for others to use. Through some research I found Galvanize as a great option so here I am!',
    'Working in the cloud, machine learning, and AI.',
    'I''m a horror nerd, so I enjoy watching horror movies.',
    'Jaws, The Shining, Casablanca',
    'All the Light We Cannot See, Daily Stoic, How to Sell a Haunted House, A Brave New World (Currently reading)',
    '"First, think. Second, believe. Third, dream. And finally, dare" - Walt Disney',
    '1. I''m a paramedic. 2. I played rugby in college. 3. Hiked Mt Kota Kinabalu in Malaysia.'
);
INSERT INTO students (
    name,
    introduction,
    whereFrom,
    whySoftwareEngineering,
    techInterest,
    Hobbies,
    favoriteMovies,
    favoriteBook,
    favoriteQuote,
    InterestingFacts
) VALUES (
    'Simi Aromolaran',
    'I am originally from Nigeria, West Africa and my native dialect is "Yoruba" language. I spent the first 28 years of my life in Nigeria before relocating to the United States.',
    'Nigeria',
    'I am a non-technical staff member--and have a very limited tech vocabulary! I have prior work experience as a college counselor as well as a Guidance counselor working with transitioning service members and their families. My most recent role was working with high school students getting a head start on college through the early college program. My family members are very techy, so I had been looking for an opportunity to break into the tech world when I found out about Operation level up which is geared specifically towards transitioning military members. After several years of passionately working with military families, I had no doubt that I got "two for one" in my new role. Not only am I getting the opportunity to explore the tech world and become more tech savvy, I am also privileged to continue to work with our nation''s greatest heroes. I look forward to helping and supporting each of these soldiers to transition to a new career path!',
    'Artificial Intelligence, Internet of Things (IOT)',
    'Cooking, singing, going to movies, cleaning my house',
    'Akila and the Bees, Training Day, Just Mercy, Dead Poets Society, The Passion of the Christ, Coming to America (Part 1), The Great Debate, Wakanda, action movies',
    'Who Moved My Cheese, Rich Dad Poor Dad, SOAR, An Everyone Culture, MAGIC, The Seven Habits of Highly Effective People, Romeo and Juliet, Things Fall Apart, As You Like It, The Tempest. Currently reading How Successful People Think by John Maxwell',
    '"Carpe Diem" "Seize the day"',
    '1. I am an early riser regardless of what time I go to bed. 2. I am engrossed with cleanliness. 3. I am terrified of heights.'
);
INSERT INTO students (
    name,
    introduction,
    whereFrom,
    whySoftwareEngineering,
    techInterest,
    Hobbies,
    favoriteMovies,
    favoriteBook,
    favoriteQuote,
    InterestingFacts
) VALUES (
    'Garcia',
    'I''m an Air Force brat so we travelled a lot as a kid, but I call Mt. Laurel, New Jersey, USA my hometown.',
    'Mt. Laurel, New Jersey, USA',
    'I am a US Army veteran, former small business manager, I worked for colleges and universities for about 7 years, and I worked as a recruiter for a data consultancy for a short stint. Long story short, all of those experiences led me here, and I''ve really enjoyed the culture around ed tech - and more importantly - supporting fellow veterans. I''m continuing my education in Data Analytics, but I came here because I love helping learners through their journeys. I cannot wait to see the projects and products you create!',
    'Data Analytics, data engineering, app development, video games',
    'Spending time with my daughter, playing video games (Retroarch, Breath of Fire III, Final Fantasy Tactics, Cyberpunk 2077, MWII/Warzone, Borderlands), watching and sparring in boxing and MMA',
    'Shutter Island, Gladiator, Over the Hedge, Aladdin, Life of Pi',
    'Life of Pi, Never Split the Difference, The Narrative of the Life of Frederick Douglass, Atomic Habits',
    'Don''t knock the little wins. They boost morale." - Freelancer, from the video game Anthem (RIP)',
    '1. I still don''t know what I want to be when I grow up, but I''m making it work! Don''t be discouraged if you''re still figuring it out! 2. I served as an Unmanned Aerial Vehicle Operator in the US Army for 5 years and served 2 tours in Iraq. 3. My wife and I have the same birthday (January). We are both Aquarians. She''s much better at gift giving than I am.'
);
INSERT INTO students (
    name,
    introduction,
    whereFrom,
    whySoftwareEngineering,
    techInterest,
    Hobbies,
    favoriteMovies,
    favoriteBook,
    favoriteQuote,
    InterestingFacts
) VALUES (
    'John Kluse',
    'Hey everybody!!!! I''m stoked to be part of this group and to be on this journey together.Salt Lake City, Utah, but I''ve lived in Hawaii for a couple of years and also in the Philippines.',
    'Salt Lake City, Utah',
    'I''m retiring from the military as a cryptologic linguist and intel analyst and wanted a challenging post-military career that would give me opportunities to continue to learn and grow. I also want to build stuff that helps solve problems and improves people''s lives.',
    'Web apps, educational technology',
    'Learning JavaScript, HTML, and CSS, hiking, fishing, camping, warm beaches, riding a OneWheel',
    'Rudy, Forrest Gump, O Brother Where Art Thou?, Ferris Bueller, Office Space',
    'Atomic Habits, Can''t Hurt Me (David Goggins), Extreme Ownership, So Good They Can''t Ignore You, Harry Potter',
    '"You miss 100% of the shots you don''t take" - Wayne Gretzky / - Michael Scott',
    '1. Scored 551 on my very last ACFT. 2. At 46 yrs old, I will probably be the oldest person in this cohort, but that just makes me the "senior" dev. 3. I have a teenage son with Down Syndrome who is obsessed with Star Wars.'
);
INSERT INTO students (
name,
introduction,
whereFrom,
whySoftwareEngineering,
techInterest,
Hobbies,
favoriteMovies,
favoriteBook,
favoriteQuote,
InterestingFacts
) VALUES (
'Will Swinson',
'Hope everyone is well! Here is some information about me if you''d like to know more please just email me here!I am from North Carolina. Currently stationed at FT HOOD, Texas',
'North Carolina',
'I am getting med boarded out of the Army currently, so I needed to pick a new career and I''ve loved technology since forever and this program stuck out to me with the CSP benefit we get, so now I am here :)',
'JavaScript, networking, hacking',
'Making YouTube videos related to JavaScript, going to the gym, hanging out in my Discord Community, working on my business',
'Black Adam, Plane',
'Discipline is Destiny by Ryan Holiday, Atomic Habits by James Clear, 12 Rules for Life by Jordan Peterson',
'"Hard times create strong men, strong men create good times, good times create weak men, and weak men create hard times." - G. Michael Hopf',
'1. I have a YouTube channel. 2. I just bought a house at 21. 3. I wish nothing but the best for everyone.'
);









-- SELECT
--   EXTRACT(HOUR FROM post_time) AS hour,
--   EXTRACT(MINUTE FROM post_time) AS minute,
--   EXTRACT(SECOND FROM post_time) AS second,
--   EXTRACT(MILLISECONDS FROM post_time) AS millisecond
-- FROM post;
