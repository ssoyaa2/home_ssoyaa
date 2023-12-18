function showAdditionalImage(id) {
        var mainImage = document.getElementById("mainImage" + id);
        var additionalImage = document.getElementById("additionalImage" + id);

        // 초기 스타일 설정
        mainImage.style.display = 'none';
        additionalImage.style.display = 'block';
    }

    function hideAdditionalImage(id) {
        var mainImage = document.getElementById("mainImage" + id);
        var additionalImage = document.getElementById("additionalImage" + id);

        // 초기 스타일 설정
        mainImage.style.display = 'block';
        additionalImage.style.display = 'none';
    }