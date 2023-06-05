#include <stdio.h>
#include <stdlib.h>
#include <curl/curl.h>

int main(int argc, char ** argv){
    CURL * curl = curl_easy_init();

    if(!curl){
        fprintf(stderr, "Curl non si è inizializzato\n");
        exit(1);
    }

    CURLcode res;
    curl_easy_setopt(curl, CURLOPT_URL, "https://www.passaportonline.poliziadistato.it/CittadinoAction.do?codop=resultRicercaRegistiProvincia&provincia=MN");
    res = curl_easy_perform(curl);

    if(res != CURLE_OK){
        fprintf(stderr, "Problemi a fetchare la pagina: %s\n", curl_easy_strerror(res));
        exit(2);
    }

    curl_easy_cleanup(curl);
    return 0;

}