CREATE TABLE "user" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"auth" int(1) NOT NULL DEFAULT '1',
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "opportunity" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"image_url" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"contact" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(15) NOT NULL,
	"web_address" varchar(255) NOT NULL,
	"social" varchar(255) NOT NULL,
	"street_address" varchar(255) NOT NULL,
	"city" varchar(50) NOT NULL,
	"zip" varchar(50) NOT NULL,
	"date_added" serial(99) NOT NULL DEFAULT 'getdate()',
	CONSTRAINT "opportunity_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "user_opportunity" (
	"user_id" int NOT NULL,
	"opportunity_id" int NOT NULL,
	"review" varchar(255) NOT NULL,
	CONSTRAINT "user_opportunity_pk" PRIMARY KEY ("user_id","opportunity_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "keyword" (
	"id" serial NOT NULL,
	"tag" serial(255) NOT NULL,
	CONSTRAINT "keyword_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "opportunity_keyword" (
	"id" serial NOT NULL,
	"opportuity_id" int NOT NULL,
	"keyword_id" int NOT NULL,
	CONSTRAINT "opportunity_keyword_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "user_opportunity" ADD CONSTRAINT "user_opportunity_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "user_opportunity" ADD CONSTRAINT "user_opportunity_fk1" FOREIGN KEY ("opportunity_id") REFERENCES "opportunity"("id");

ALTER TABLE "opportunity_keyword" ADD CONSTRAINT "opportunity_keyword_fk0" FOREIGN KEY ("opportuity_id") REFERENCES "opportunity"("id");
ALTER TABLE "opportunity_keyword" ADD CONSTRAINT "opportunity_keyword_fk1" FOREIGN KEY ("keyword_id") REFERENCES "keyword"("id");

INSERT INTO "public"."opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip")
VALUES(
'Surly Gives a Damn', 
'https://pbs.twimg.com/profile_images/867503621331718146/drqBGY3Q.jpg', 
'Because living in Minnesota rules, we give back to our community with Surly Gives A Damn (SGAD). We contribute to the fine organizations that are making the North a better place to live through charitable donations, partnerships, and volunteer events. Our volunteers are a really active, passionate bunch and man do they give a damn.', 
'Mary Selke', 
'mary@surlybrewing.com', 
'',
'https://surlybrewing.com/surly-gives-a-damn/', 
'https://twitter.com/surlygivesadamn?lang=en', 
'',
'Minneapolis', 
'55414'), 
(
'House of Hope Presbyterian Church', 
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4iXM8E1rLI2GiPnBH1DJn8hEOWdfittXfe7uI3JygJz-1L-Ok', 
' contribute to the fine organizations that are making the North a better place to live through charitable donations, partnerships, and volunteer events. Our volunteers are a really active, passionate bunch and man do they give a damn.', 
'Mary Selke', 
'mary@surlybrewing.com', 
'',
'https://surlybrewing.com/surly-gives-a-damn/', 
'https://twitter.com/surlygivesadamn?lang=en', 
'',
'Minneapolis', 
'55414'), 
(
'Surly Gives a Damn', 
'https://pbs.twimg.com/profile_images/867503621331718146/drqBGY3Q.jpg', 
'Because living in Minnesota rules, we give back to our community with Surly Gives A Damn (SGAD). We contribute to the fine organizations that are making the North a better place to live through charitable donations, partnerships, and volunteer events. Our volunteers are a really active, passionate bunch and man do they give a damn.', 
'Mary Selke', 
'mary@surlybrewing.com', 
'',
'https://surlybrewing.com/surly-gives-a-damn/', 
'https://twitter.com/surlygivesadamn?lang=en', 
'',
'Minneapolis', 
'55414'), 
(
'Surly Gives a Damn', 
'https://pbs.twimg.com/profile_images/867503621331718146/drqBGY3Q.jpg', 
'Because living in Minnesota rules, we give back to our community with Surly Gives A Damn (SGAD). We contribute to the fine organizations that are making the North a better place to live through charitable donations, partnerships, and volunteer events. Our volunteers are a really active, passionate bunch and man do they give a damn.', 
'Mary Selke', 
'mary@surlybrewing.com', 
'',
'https://surlybrewing.com/surly-gives-a-damn/', 
'https://twitter.com/surlygivesadamn?lang=en', 
'',
'Minneapolis', 
'55414'), 
(
'Surly Gives a Damn', 
'https://pbs.twimg.com/profile_images/867503621331718146/drqBGY3Q.jpg', 
'Because living in Minnesota rules, we give back to our community with Surly Gives A Damn (SGAD). We contribute to the fine organizations that are making the North a better place to live through charitable donations, partnerships, and volunteer events. Our volunteers are a really active, passionate bunch and man do they give a damn.', 
'Mary Selke', 
'mary@surlybrewing.com', 
'',
'https://surlybrewing.com/surly-gives-a-damn/', 
'https://twitter.com/surlygivesadamn?lang=en', 
'',
'Minneapolis', 
'55414'), 
(
'Surly Gives a Damn', 
'https://pbs.twimg.com/profile_images/867503621331718146/drqBGY3Q.jpg', 
'Because living in Minnesota rules, we give back to our community with Surly Gives A Damn (SGAD). We contribute to the fine organizations that are making the North a better place to live through charitable donations, partnerships, and volunteer events. Our volunteers are a really active, passionate bunch and man do they give a damn.', 
'Mary Selke', 
'mary@surlybrewing.com', 
'',
'https://surlybrewing.com/surly-gives-a-damn/', 
'https://twitter.com/surlygivesadamn?lang=en', 
'',
'Minneapolis', 
'55414'), 
(
'Surly Gives a Damn', 
'https://pbs.twimg.com/profile_images/867503621331718146/drqBGY3Q.jpg', 
'Because living in Minnesota rules, we give back to our community with Surly Gives A Damn (SGAD). We contribute to the fine organizations that are making the North a better place to live through charitable donations, partnerships, and volunteer events. Our volunteers are a really active, passionate bunch and man do they give a damn.', 
'Mary Selke', 
'mary@surlybrewing.com', 
'',
'https://surlybrewing.com/surly-gives-a-damn/', 
'https://twitter.com/surlygivesadamn?lang=en', 
'',
'Minneapolis', 
'55414'), 
(
'Surly Gives a Damn', 
'https://pbs.twimg.com/profile_images/867503621331718146/drqBGY3Q.jpg', 
'Because living in Minnesota rules, we give back to our community with Surly Gives A Damn (SGAD). We contribute to the fine organizations that are making the North a better place to live through charitable donations, partnerships, and volunteer events. Our volunteers are a really active, passionate bunch and man do they give a damn.', 
'Mary Selke', 
'mary@surlybrewing.com', 
'',
'https://surlybrewing.com/surly-gives-a-damn/', 
'https://twitter.com/surlygivesadamn?lang=en', 
'',
'Minneapolis', 
'55414')