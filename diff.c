#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>


int main(void){
    remove("file2.htlm");

    char * fetch2 = {"./fetch > file2.html"};
    char * diff = {"diff file1.html file2.html"};

    while(1){
        system(fetch2);
        sleep(2);
        system(diff);
        sleep(8);
    }

    return 0;
}