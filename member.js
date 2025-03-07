function skillsMember(name, skills) {
    console.log(`Skills Member: ${name}`);
    console.log("Skills:");
    skills.forEach(skill => {
        console.log(`- ${skill}`);
    });
}

// Example usage:
skillsMember("John Doe", ["JavaScript", "React", "Node.js"]);