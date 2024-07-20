#include <stdio.h>

int func(int a);
int main()
{   
    int in;
    scanf("%d", &in);
    printf("%d", in);

    return 0;
}

int func(int a)
{
    if (a <= 1) return 1;
    return a * (a - 2);
}