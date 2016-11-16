// Copyright (c) 2015, Trent Oswald <trentoswald@therebelrobot.com
//
// Permission to use, copy, modify, and/or distribute this software for any purpose
// with or without fee is hereby granted, provided that the above copyright notice
// and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED 'AS IS' AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT,
// OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
// DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS
// ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

const countries = ["afghanistan", "albania", "algeria", "american_samoa", "angola", "anguilla", "antarctica", "antigua_and_barbuda", "argentina", "armenia", "aruba", "ashmore_and_cartier_island", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bermuda", "bhutan", "bolivia", "bosnia_and_herzegovina", "botswana", "brazil", "british_virgin_islands", "brunei", "bulgaria", "burkina_faso", "burma", "burundi", "cambodia", "cameroon", "canada", "cape_verde", "cayman_islands", "central_african_republic", "chad", "chile", "china", "christmas_island", "clipperton_island", "cocos_keeling_islands", "colombia", "comoros", "congo_democratic_republic_of_the", "congo_republic_of_the", "cook_islands", "costa_rica", "cote_d_ivoire", "croatia", "cuba", "cyprus", "czeck_republic", "denmark", "djibouti", "dominica", "dominican_republic", "ecuador", "egypt", "el_salvador", "equatorial_guinea", "eritrea", "estonia", "ethiopia", "europa_island", "falkland_islands_islas_malvinas", "faroe_islands", "fiji", "finland", "france", "french_guiana", "french_polynesia", "french_southern_and_antarctic_lands", "gabon", "gambia_the", "gaza_strip", "georgia", "germany", "ghana", "gibraltar", "glorioso_islands", "greece", "greenland", "grenada", "guadeloupe", "guam", "guatemala", "guernsey", "guinea", "guinea_bissau", "guyana", "haiti", "heard_island_and_mc_donald_islands", "holy_see_vatican_city", "honduras", "hong_kong", "howland_island", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "ireland_northern", "israel", "italy", "jamaica", "jan_mayen", "japan", "jarvis_island", "jersey", "johnston_atoll", "jordan", "juan_de_nova_island", "kazakhstan", "kenya", "kiribati", "korea_north", "korea_south", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "macau", "macedonia_former_yugoslav_republic_of", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "man_isle_of", "marshall_islands", "martinique", "mauritania", "mauritius", "mayotte", "mexico", "micronesia_federated_states_of", "midway_islands", "moldova", "monaco", "mongolia", "montserrat", "morocco", "mozambique", "namibia", "nauru", "nepal", "netherlands", "netherlands_antilles", "new_caledonia", "new_zealand", "nicaragua", "niger", "nigeria", "niue", "norfolk_island", "northern_mariana_islands", "norway", "oman", "pakistan", "palau", "panama", "papua_new_guinea", "paraguay", "peru", "philippines", "pitcaim_islands", "poland", "portugal", "puerto_rico", "qatar", "reunion", "romainia", "russia", "rwanda", "saint_helena", "saint_kitts_and_nevis", "saint_lucia", "saint_pierre_and_miquelon", "saint_vincent_and_the_grenadines", "samoa", "san_marino", "sao_tome_and_principe", "saudi_arabia", "senegal", "seychelles", "sierra_leone", "singapore", "slovakia", "slovenia", "solomon_islands", "somalia", "south_africa", "south_georgia_and_south_sandwich_islands", "spain", "spratly_islands", "sri_lanka", "sudan", "suriname", "svalbard", "swaziland", "sweden", "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "tobago", "toga", "tokelau", "tonga", "trinidad", "tunisia", "turkey", "turkmenistan", "tuvalu", "uganda", "ukraine", "united_arab_emirates", "united_kingdom", "united_states_of_america", "uruguay", "uzbekistan", "vanuatu", "venezuela", "vietnam", "virgin_islands", "wales", "wallis_and_futuna", "west_bank", "western_sahara", "yemen", "zambia", "zimbabwe"]

function requireAll (requireContext) {
  return requireContext.keys().map(requireContext)
}

var _ = require('lodash')

var fileList = _.map(countries, function(country) {
  return require('./' + country + '.json');
});

module.exports = function () {
  var totalList = []
  _.forEach(fileList, function (file) {
    file.ISO[2] = file.ISO.alpha2
    file.ISO[3] = file.ISO.alpha3
    totalList.push(file)
  })
  return totalList
}
