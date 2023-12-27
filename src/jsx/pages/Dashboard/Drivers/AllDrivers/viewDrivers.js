import React from "react"
import { FilteringTable } from "../../../../components"
import { tableColumns } from "./columns"

const data = [{ "id": 1, "first_name": "Aldous", "last_name": "Drissell", "email": "adrissell0@edublogs.org", "date_of_birth": "2015-05-05T06:18:12Z", "approved": "Yes", "country": "Malaysia", "phone": "8898927667" },
{ "id": 2, "first_name": "Larissa", "last_name": "Sandever", "email": "lsandever1@joomla.org", "date_of_birth": "1982-05-01T03:16:30Z", "approved": "Yes", "country": "Pakistan", "phone": "2315313399" },
{ "id": 3, "first_name": "Bron", "last_name": "Allkins", "email": "ballkins2@vkontakte.ru", "date_of_birth": "1996-02-01T16:48:16Z", "approved": "No", "country": "China", "phone": "7287791978" },
{ "id": 4, "first_name": "Amabel", "last_name": "Summerfield", "email": "asummerfield3@latimes.com", "date_of_birth": "2008-10-16T02:38:43Z", "approved": "Yes", "country": "Croatia", "phone": "5203993323" },
{ "id": 5, "first_name": "Karol", "last_name": "Privett", "email": "kprivett4@google.ru", "date_of_birth": "1972-09-28T23:22:11Z", "approved": "No", "country": "Macedonia", "phone": "1026280679" },
{ "id": 6, "first_name": "Ania", "last_name": "Sarra", "email": "asarra5@instagram.com", "date_of_birth": "1971-09-24T06:48:16Z", "approved": "Yes", "country": "Portugal", "phone": "3845060667" },
{ "id": 7, "first_name": "Phaedra", "last_name": "Dankov", "email": "pdankov6@telegraph.co.uk", "date_of_birth": "1987-05-07T09:54:16Z", "approved": "Yes", "country": "Mexico", "phone": "9758708783" },
{ "id": 8, "first_name": "Deny", "last_name": "Delouch", "email": "ddelouch7@rakuten.co.jp", "date_of_birth": "1984-10-07T23:12:44Z", "approved": "Yes", "country": "Malaysia", "phone": "6573041812" },
{ "id": 9, "first_name": "Alexia", "last_name": "Longbothom", "email": "alongbothom8@soundcloud.com", "date_of_birth": "1985-03-09T18:33:58Z", "approved": "No", "country": "Panama", "phone": "7644875762" },
{ "id": 10, "first_name": "Obadiah", "last_name": "Tuckie", "email": "otuckie9@washingtonpost.com", "date_of_birth": "1999-03-02T04:59:39Z", "approved": "Yes", "country": "Panama", "phone": "7268934858" },
{ "id": 11, "first_name": "Kerwin", "last_name": "Dicte", "email": "kdictea@comcast.net", "date_of_birth": "2022-02-16T11:45:51Z", "approved": "No", "country": "Saudi Arabia", "phone": "2648248025" },
{ "id": 12, "first_name": "Celestina", "last_name": "Artindale", "email": "cartindaleb@cpanel.net", "date_of_birth": "1978-06-17T13:18:36Z", "approved": "No", "country": "Honduras", "phone": "8266326863" },
{ "id": 13, "first_name": "Meridith", "last_name": "Stedson", "email": "mstedsonc@ow.ly", "date_of_birth": "1990-01-13T23:15:49Z", "approved": "No", "country": "Mongolia", "phone": "9266496918" },
{ "id": 14, "first_name": "Stanislaus", "last_name": "Gobolos", "email": "sgobolosd@fema.gov", "date_of_birth": "2008-09-05T15:06:44Z", "approved": "No", "country": "Brazil", "phone": "8356718733" },
{ "id": 15, "first_name": "Patin", "last_name": "Lailey", "email": "plaileye@imdb.com", "date_of_birth": "1979-01-21T17:30:14Z", "approved": "Yes", "country": "Brazil", "phone": "2793619358" },
{ "id": 16, "first_name": "Brian", "last_name": "Videler", "email": "bvidelerf@redcross.org", "date_of_birth": "2013-04-11T06:28:17Z", "approved": "No", "country": "Portugal", "phone": "7025842713" },
{ "id": 17, "first_name": "Roy", "last_name": "Surgener", "email": "rsurgenerg@t-online.de", "date_of_birth": "1971-07-25T09:11:42Z", "approved": "Yes", "country": "Brazil", "phone": "6935088381" },
]

export const ViewDrivers = () => {
    return (
        <>
            <FilteringTable name={"Drivers"} cols={tableColumns} data={data} link={"/driver"} />
        </>
    )
}