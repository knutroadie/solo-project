CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(255) UNIQUE NOT NULL,
	"password" VARCHAR(255) NOT NULL,
	"auth" INT NOT NULL DEFAULT '1'
);

CREATE TABLE "opportunity" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(255) UNIQUE NOT NULL,
	"image_url" VARCHAR(255),
	"description" VARCHAR(255),
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
'55114');

INSERT INTO "opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip", "date_added")
VALUES
('Habitat for Humanity - Twin Cities', 
'https://pbs.twimg.com/profile_images/461899942596849664/b1B2gUfi.jpeg', 
'To eliminate poverty housing from the Twin Cities and to make decent, affordable shelter for all people a matter of conscience.', 
'', 
'info@tchabitat.org', 
'(651) 207-1700',
'https://www.tchabitat.org/volunteer', 
'https://www.facebook.com/tchabitat/', 
'1954 University Avenue West',
'Saint Paul', 
'55104',
'now()');

INSERT INTO "user" ("username", "password", "auth")
VALUES ('admin', '123', '0') ('user', '123', '1');