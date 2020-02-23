CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(255) UNIQUE NOT NULL,
	"password" VARCHAR(255) NOT NULL,
	"auth" INT NOT NULL DEFAULT '1'
);

CREATE TABLE "opportunity" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(255) UNIQUE NOT NULL,
	"image_url" TEXT,
	"description" TEXT,
	"contact" VARCHAR(255),
	"email" VARCHAR(255),
	"phone" VARCHAR(15),
	"web_address" VARCHAR(255),
	"social" VARCHAR(255),
	"street_address" VARCHAR(255),
	"city" VARCHAR(50),
	"zip" VARCHAR(50),
	"date_added" TIMESTAMP(14)
);

CREATE TABLE "user_opportunity" (
	"user_id" INT NOT NULL,
	"opportunity_id" INT NOT NULL,
	"review" VARCHAR(255)
);

ALTER TABLE "user_opportunity" ADD CONSTRAINT "user_opportunity_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "user_opportunity" ADD CONSTRAINT "user_opportunity_fk1" FOREIGN KEY ("opportunity_id") REFERENCES "opportunity"("id");

CREATE TABLE "keyword" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"tag" VARCHAR(50) NOT NULL
);

CREATE TABLE "opportunity_keyword" (
	"id" SERIAL PRIMARY KEY,
	"opportuity_id" INT NOT NULL,
	"keyword_id" INT NOT NULL
);

ALTER TABLE "opportunity_keyword" ADD CONSTRAINT "opportunity_keyword_fk0" FOREIGN KEY ("opportuity_id") REFERENCES "opportunity"("id");
ALTER TABLE "opportunity_keyword" ADD CONSTRAINT "opportunity_keyword_fk1" FOREIGN KEY ("keyword_id") REFERENCES "keyword"("id");

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('Surly Gives a Damn', 
'https://pbs.twimg.com/profile_images/867503621331718146/drqBGY3Q.jpg', 
'We contribute to the fine organizations that are making the North a better place to live through charitable donations, partnerships, and volunteer events. Our volunteers are a really active, passionate bunch and man do they give a damn.', 
'Mary Selke', 
'mary@surlybrewing.com', 
'',
'https://surlybrewing.com/surly-gives-a-damn/', 
'https://twitter.com/surlygivesadamn?lang=en', 
'',
'Minneapolis', 
'55414',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('House of Hope Presbyterian Church', 
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4iXM8E1rLI2GiPnBH1DJn8hEOWdfittXfe7uI3JygJz-1L-Ok', 
'At the core of House of Hope is a deeply embedded commitment to the greater community. We are dedicated to social justice and human rights, and are intentional citizens and good neighbors within the community.', 
'', 
'HOH@hohchurch.org', 
'(651) 227-6311',
'https://www.hohchurch.org/mission/get-involved/', 
'https://www.facebook.com/HouseofHopePresbyterian/', 
'797 Summit Avenue',
'Saint Paul', 
'55105',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('Sha’arim', 
'https://tcjewfolk.com/wp-content/uploads/2018/09/Shaarim.jpg', 
'Get more than you give. Our volunteers make the world a better place. Help us create a truly inclusive community just by being a friend. It’s that easy to change the lives of children and adults with special needs.', 
'Chana Shagalow', 
'info@shaarim.org', 
'(952) 303-5276',
'https://shaarim.org/shaarim/get-involved/volunteer/', 
'https://www.facebook.com/shaarimmn/', 
'2851 Hedberg Drive',
'Minnetonka', 
'55305',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('Council on Islamic Relations (CAIR) Minnesota', 
'https://media-exp1.licdn.com/dms/image/C560BAQHjo_Jz-MA4sw/company-logo_200_200/0?e=2159024400&v=beta&t=wBUL9QXIVMVuKPylUUDNBCG99I3DGAn4DXfpqH3kOYI', 
'CAIR-MN Mission: To enhance the understanding of Islam, encourage dialogue, protect civil liberties, empower American Muslims and build coalitions that promote justice and mutual understanding.', 
'', 
'info@mn.cair.com', 
'',
'https://www.cairmn.com/57-internships/391-volunteer-advocate-impact-join-the-wecair-team.html', 
'https://www.facebook.com/CAIR.Minnesota', 
'2511 East Franklin Avenue, #100',
'Minneapolis', 
'55406',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('St. Stephen’s Minneapolis', 
'https://ststephensmpls.org/application/files/thumbnails/small/8215/7435/7962/Logo_Latest.png', 
'Our mission is ending homelessness. St. Stephen''s provides street outreach, shelter, and housing programs for people who are experiencing and emerging from homelessness in Hennepin County, Minnesota.', 
'', 
'', 
'612.874.0311',
'https://ststephensmpls.org/volunteer', 
'https://www.facebook.com/StStephensMpls/', 
'2309 Nicollet Avenue',
'Minneapolis', 
'55404',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('Special Olympics Minnesota', 
'https://res.cloudinary.com/dktp1ybbx/image/upload/f_auto,fl_lossy,q_auto/v1550947259/organization/prod/57145/hVc6RqUhx4.jpg', 
'Through Special Olympics’ athletic, health and leadership programs, people with intellectual disabilities transform themselves, their communities and the world.', 
'', 
'info@somn.org', 
'612.333.0999',
'https://specialolympicsminnesota.org/get-involved/volunteers/', 
'https://www.facebook.com/SOMinnesota', 
'900 2nd Avenue South, Suite 300',
'Minneapolis', 
'55402',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('Disabled American Veterans of Minnesota', 
'https://davmn.org/wp-content/uploads/2018/02/DAV-of-MN1.jpg', 
'The Disabled American Veterans’ Voluntary Services Program provides numerous opportunities for men and women of all ages to help make a difference in the lives of disabled veterans.', 
'', 
'', 
'(651) 291-1212',
'https://davmn.org/volunteer/', 
'https://www.facebook.com/DAVofMN/', 
'20 12th Street West',
'Saint Paul', 
'55155',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('First Covenant Church of Minneapolis', 
'https://www.handsontwincities.org/content/www.handsontwincities.org/agency/86814.jpg?1528320740?area=agency', 
'First Covenant partners with a shelter provider to offer shelter to men and women experiencing homelessness. We the space and volunteer coordination to provide and serve a hot meal nightly. We seek volunteers to provide these critical needs.', 
'Meg Barke', 
'mbarke@ststephensmpls.org', 
'612-332-8093',
'https://www.1stcov.org/shelter', 
'https://www.instagram.com/1stcovmpls/', 
'810 South 7th Street',
'Minneapolis', 
'55415',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip")
VALUES
('RECLAIM!', 
'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/51666014_2397331036965572_4560729409736146944_o.jpg?_nc_cat=108&_nc_ohc=vlJxlNZitj4AX9fsIhw&_nc_ht=scontent.ffcm1-2.fna&oh=1037914dae73f35b7301857edbe8953d&oe=5EC7AE84', 
'RECLAIM’s mission is to increase access to mental health support for queer and trans youth so they might reclaim their lives from oppression in all of its forms.', 
'', 
'info@reclaim.care', 
'(612) 235-6743', 
'https://www.reclaim.care/', 
'https://www.facebook.com/reclaimqt/', 
'771 Raymond Avenue', 
'Saint Paul', 
'55114',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('Feed My Starving Children - Eagan', 
'https://imagecdn.mightycause.com/d9edcd78-7e26-451e-aa61-40b5f0469123/-/crop/591x590/63,71/-/preview/', 
'You will hear us say this again and again: “We want to reach everyone, until ALL are fed.” We truly mean this. This means reaching the hard-to-reach people and places, the “least of these.” They will be found, and they will be fed.', 
'Tony Sconza', 
'eaganinfo@fmsc.org', 
'(763) 746-2952',
'https://www.fmsc.org/get-involved/volunteer', 
'https://www.facebook.com/feedmystarvingchildren', 
'990 Lone Oak Road, Suite 136',
'Eagan, MN', 
'55121',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('Ka Joog', 
'https://pbs.twimg.com/profile_images/799689399139078144/q3zod7Rs.jpg', 
'Ka Joog is a nationally recognized, Somali nonprofit organization tailored towards enriching the lives of Somali American youth by utilizing the positive elements of education, mentoring, employment, and the arts. Ka Joog’s mission is to motivate youth to pursue higher education, while promoting and building community ties at events throughout Minnesota.', 
'', 
'info@kajoog.org', 
'(612) 255-3524',
'https://www.kajoog.org', 
'https://www.facebook.com/kajoog.org/', 
'1420 South Washington Avenue',
'Minneapolis, MN', 
'55454',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('Bridging - Roseville', 
'https://www.handsontwincities.org/content/www.handsontwincities.org/agency/61532.jpg?1483109337?area=agency', 
'Bridging empowers people to thrive in their homes by providing quality furniture and household goods to those pursuing housing stability.', 
'', 
'community@bridging.org', 
'(651) 631-3255',
'https://www.bridging.org/engage/volunteer/', 
'https://www.facebook.com/BridgingMN/', 
'1730 Terrace Drive',
'Roseville, MN', 
'55113',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('The Sheridan Story', 
'https://www.thesheridanstory.org/wp-content/uploads/2017/06/SheridanStoryLogotallBW-1170x1170.jpg', 
'Fight child hunger through community and school partnerships.', 
'', 
'info@thesheridanstory.org', 
'(612) 568-4003',
'https://www.thesheridanstory.org/get-involved/volunteer/', 
'https://www.instagram.com/sheridanstory/', 
'2723 Patton Road',
'Roseville, MN', 
'55113',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('The Food Group', 
'https://media-exp1.licdn.com/dms/image/C510BAQEClgMO2kCsRQ/company-logo_200_200/0?e=2159024400&v=beta&t=jqiZKDfeOLs8sF9SnXsjSLEboShXgZ-uRPpNdK_bu6k', 
'We work at the intersection of food access, equity, and nutrition issues related to food and hunger in 32 counties in Minnesota and Wisconsin. We break down barriers to growing good food locally and getting good food to those who need it most.', 
'contact', 
'info@thefoodgroupmn.org', 
'(763) 450-3860',
'https://thefoodgroupmn.org/get-involved/volunteer/', 
'https://www.facebook.com/thefoodgroupmn/', 
'8501 54th Avenue North',
'New Hope, MN', 
'55428',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('Neighborhood House', 
'https://www.handsontwincities.org/content/www.handsontwincities.org/agency/61774.jpg?1481211891?area=agency', 
'We are a multi-service agency, providing wrap-around services for people when they need it most. Neighborhood House helps people with basic needs, education, multiple youth programs, and health and well-being.', 
'', 
'info@neighb.org', 
'(651) 789-2500',
'http://neighb.org/support/volunteer/', 
'https://www.facebook.com/neighborhoodhouseMN/', 
'179 Robie Street East',
'Saint Paul, MN', 
'55107',
'now()');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('People Incorporated', 
'https://pbs.twimg.com/profile_images/1214682325935632384/fW_cjS5R_400x400.png', 
'We are an innovative community provider of vital integrated behavioral and mental health services in Minnesota supporting mental health and wellness in our community through collaboration and integration of care.', 
'contact', 
'info@peopleincorporated.org', 
'(651) 774-0011',
'https://www.peopleincorporated.org/get-involved/volunteer/', 
'https://www.facebook.com/PeopleIncorporated', 
'2060 Centre Pointe Boulevard, Suite 3',
'Saint Paul, MN', 
'55120',
'now()');

INSERT INTO "user" ("username", "password", "auth")
VALUES ('admin', '123', '0') ('user', '123', '1');