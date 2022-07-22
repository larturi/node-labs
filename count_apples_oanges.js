function countApplesAndOranges(s, t, a, b, apples, oranges) {

    const distances_a = [];
    const distances_b = [];
    let cant_apples = 0;
    let cant_oranges = 0;

    apples.forEach(apple => distances_a.push(a + apple));
    oranges.forEach(orange => distances_b.push(b + orange));

    distances_a.forEach(x => {
        if (x >= s && x <= t) {
            cant_apples++;
        }
    });

    distances_b.forEach(y => {
        if (y >= s && y <= t) {
            cant_oranges++;
        }
    });

    console.log(cant_apples);
    console.log(cant_oranges);

}


const s = 7 // Inicio casa
const t = 10 // Fin casa
const a = 4 // Donde esta el arbol de manzanas
const b = 12 // Donde esta el arbol de naranjas
const apples = [2, 3, -4]
const oranges = [3, -2, -4]
countApplesAndOranges(s, t, a, b, apples, oranges)

/* 
0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15
                                o3      o2                  o1
a3                      a1  a2
                a           s            t       b
*/