--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.14 (Ubuntu 10.14-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.beers DROP CONSTRAINT IF EXISTS beers_fk0;
ALTER TABLE IF EXISTS ONLY public.brewery DROP CONSTRAINT IF EXISTS brewery_pk;
ALTER TABLE IF EXISTS ONLY public.beers DROP CONSTRAINT IF EXISTS beers_pk;
ALTER TABLE IF EXISTS public.brewery ALTER COLUMN "breweryID" DROP DEFAULT;
ALTER TABLE IF EXISTS public.beers ALTER COLUMN "beerID" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."brewery_breweryID_seq";
DROP TABLE IF EXISTS public.brewery;
DROP SEQUENCE IF EXISTS public."beers_beerID_seq";
DROP TABLE IF EXISTS public.beers;
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: beers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.beers (
    "beerID" integer NOT NULL,
    name text NOT NULL,
    "breweryID" bigint NOT NULL,
    rating numeric NOT NULL,
    note text NOT NULL,
    bar text NOT NULL
);


--
-- Name: beers_beerID_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."beers_beerID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: beers_beerID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."beers_beerID_seq" OWNED BY public.beers."beerID";


--
-- Name: brewery; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.brewery (
    "breweryID" integer NOT NULL,
    name text NOT NULL,
    city text,
    state text,
    link text
);


--
-- Name: brewery_breweryID_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."brewery_breweryID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: brewery_breweryID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."brewery_breweryID_seq" OWNED BY public.brewery."breweryID";


--
-- Name: beers beerID; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.beers ALTER COLUMN "beerID" SET DEFAULT nextval('public."beers_beerID_seq"'::regclass);


--
-- Name: brewery breweryID; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.brewery ALTER COLUMN "breweryID" SET DEFAULT nextval('public."brewery_breweryID_seq"'::regclass);


--
-- Data for Name: beers; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.beers ("beerID", name, "breweryID", rating, note, bar) FROM stdin;
48	Sculpin	356	4	hoppy 	Beachwood
49	Hoppy Dog	629	4	fruity hoppy pale	Tin Roof
50	Nobility	853	5	strong balanced double ipa	Quinn's
\.


--
-- Data for Name: brewery; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.brewery ("breweryID", name, city, state, link) FROM stdin;
629	Golden Road Brewing	Los Angeles	California	http://www.goldenroad.la
366	Belmont Brewing Co	Long Beach	California	http://www.belmontbrewing.com
356	Beachwood BBQ & Brewing	Long Beach	California	http://www.beachwoodbbq.com
853	Noble Ale Works	Anaheim	California	http://www.noblealeworks.com
7309	Vanish Farmwoods Brewery	Leesburg	Virginia	http://vanishbeer.com
\.


--
-- Name: beers_beerID_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."beers_beerID_seq"', 52, true);


--
-- Name: brewery_breweryID_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."brewery_breweryID_seq"', 1, true);


--
-- Name: beers beers_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.beers
    ADD CONSTRAINT beers_pk PRIMARY KEY ("beerID");


--
-- Name: brewery brewery_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.brewery
    ADD CONSTRAINT brewery_pk PRIMARY KEY ("breweryID");


--
-- Name: beers beers_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.beers
    ADD CONSTRAINT beers_fk0 FOREIGN KEY ("breweryID") REFERENCES public.brewery("breweryID");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

