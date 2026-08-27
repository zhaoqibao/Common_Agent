import minio
from base import config as cfg


class MinioConn:

  def __init__(self):
    try:
      self.minio_client = minio.Minio(
        cfg.MINIO_ENDPOINT,
        access_key=cfg.MINIO_ACCESS_KEY,
        secret_key=cfg.MINIO_SECRET_KEY,
        secure=False  # 不去验证安全证书
      )
      print("Minio连接成功")
    except Exception as e:
      print("Minio连接失败")
      self.minio_client = None

  # 创建存储桶
  def create_bucket(self, bucket_name):
    self.minio_client.make_bucket(bucket_name)

  # 创建存储桶(如果存在则不创建)
  def create_bucket_if_not_exists(self, bucket_name):
    if not self.minio_client.bucket_exists(bucket_name):
      self.minio_client.make_bucket(bucket_name)

  # 删除存储桶
  def delete_bucket(self, bucket_name):
    self.minio_client.remove_bucket(bucket_name)

  # 上传文件
  def upload_file(self, bucket_name, object_name, file_path):
    """
    :param bucket_name: 存储桶的名字
    :param object_name: 在minio上的文件名
    :param file_path:  本地文件所在路径
    :return:
    """
    self.minio_client.fput_object(bucket_name, object_name, file_path)

  # 下载文件
  def download_file(self, bucket_name, object_name, file_path):
    self.minio_client.fget_object(bucket_name, object_name, file_path)

  # 获得下载连接
  def get_download_url(self, bucket_name, object_name):
    return self.minio_client.presigned_get_object(bucket_name, object_name)


if __name__ == '__main__':
  mc = MinioConn()
  # 测试上传文件
  mc.upload_file('common-agent', 'a.txt', f'{cfg.ROOT_PATH_AGENT}/a.txt')
  print("上传文件成功")
  # 测试下载文件
  mc.download_file('common-agent', 'a.txt', f'{cfg.ROOT_PATH_AGENT}/b.txt')
  print("下载文件成功")
  # 测试获取下载连接
  a = mc.get_download_url('common-agent', 'a.txt')
  print(a)
