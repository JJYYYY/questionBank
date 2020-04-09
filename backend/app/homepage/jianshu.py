import requests
import json


class JianShu():
    headers = {
        "Content-Type": "application/json; charset=UTF-8",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3970.5 Safari/537.36",
        "Cookie": 'sajssdk_2015_cross_new_user=1; locale=zh-CN; __yadk_uid=HiSedF8TxuEKXlQkYKLTMB8SFwEVZJMi; Hm_lvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1585741661; read_mode=day; default_font=font2; remember_user_token=W1sxNDUxNjA4MV0sIiQyYSQxMSRDUDN6bmF1RHMuYU92R0ZxYWIydDR1IiwiMTU4NTc0MTcwMS4xMDA1ODI0Il0%3D--33f317acced2661acc89348864163d1d8d63027b; web_login_version=MTU4NTc0MTcwMQ%3D%3D--63d41276a5599d5e21d351e96e720f29df1bb60c; _m7e_session_core=2b82a4420ebfd8e7d1f8ed033aa68f2b; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22171359184084a3-02070e0beec763-6a547d2e-2073600-17135918409e5d%22%2C%22%24device_id%22%3A%22171359184084a3-02070e0beec763-6a547d2e-2073600-17135918409e5d%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%2C%22first_id%22%3A%22%22%7D; Hm_lpvt_0c0e9d9b1e7d617b3e6842e85b9fb068=1585742673'
    }

    new_article_url= "https://www.jianshu.com/author/notes"
    new_article_data={"notebook_id":"30444514","at_bottom":False}


    def __init__(self):
        pass



    def create_new_article(self,title):
        self.new_article_data.update({"title":title})
        print(self.new_article_url)
        res=requests.post(self.new_article_url,data=json.dumps(self.new_article_data),headers=self.headers).text
        id=json.loads(res)["id"]
        return id




    def upload(self,title,content):
        id=self.create_new_article(title)
        data = {"id": id, "autosave_control": 1, "title": title,
                "content": content }
        update_url = "https://www.jianshu.com/author/notes/" + str(id)
        requests.put(update_url,data=json.dumps(data),headers=self.headers)
        publish_url="https://www.jianshu.com/author/notes/"+ str(id) +"/publicize"
        requests.post(publish_url,headers=self.headers)



if __name__ == '__main__':
    jiangsu=JianShu()
    # jiangsu.create_new_article("122121")

    jiangsu.upload("简书","我来了")
