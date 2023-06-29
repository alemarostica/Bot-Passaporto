#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <time.h>

int main(void){
    remove("file2.html");

    char * fetch2 = {"./fetch > file2.html"};
    char * diff = {"diff -q file1.html file2.html"};

    char * c_time_string;
    time_t current_time;

    while(1){
        system(fetch2);
        sleep(2);
        if(0 != (system(diff))){
            current_time = time(NULL);
            c_time_string = ctime(&current_time);
            fprintf(stdout, "%s\n: ", c_time_string);
        }
        sleep(8);
    }

    return 0;
}