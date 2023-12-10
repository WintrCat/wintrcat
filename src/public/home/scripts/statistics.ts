type Repository = { size: number };

fetch("https://api.github.com/users/wintrcat/repos").then(async res => {
    let repositories: Repository[] = await res.json();

    // Find number of repositories
    $(".statistic-repositories").html(repositories.length.toString());
    
    // Find cumulative size of repository code
    let size = repositories
        .map(repository => repository.size)
        .reduce((prev, curr) => prev + curr);

    // Divide for KB and MB
    let suffix = "";
    if (size >= 1000000) {
        size /= 1000000;
        suffix = " MB";
    } else if (size >= 1000) {
        size /= 1000;
        suffix = " KB";
    }

    $(".statistic-code-size").html(size.toFixed(1) + suffix);    
}).catch(() => {
    $(".statistic-repositories").html("Some");
    $(".statistic-code-size").html("Lots");  
});

// Calculate my age because I'm lazy
const now = new Date();

let elapsedYears = now.getFullYear() - 2006;
if (now.getMonth() < 3 || (now.getMonth() == 3 && now.getDate() < 2)) {
    elapsedYears--;
}

$(".age").html(elapsedYears.toString());