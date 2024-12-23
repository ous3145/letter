// Example data for the cards
const cardsData = [
  { id: 1, title: 'Anniversary Card', category: 'anniversary', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0CeakbxiTQi8fua8sUbQpEntnsrbtILQdDZFh3umFFp_5JELbSuHisjxZEGOQ-OsU_Bu4wdOAUuEPejoVeRXEtR1x4V5johOf4UWOqPrTysrBXFkQ4hOBqO6k9CCVA3Pgwkrxerz9nZg__L47E_fH52A3gReN3LOT5lgB8bUPjvFGA-tpikEqZPSvQRU/s920/anniversary1.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiWs_OT8eCNOZ3T91JcCwdxbuJ-0cROcTMQNtznMTaPdgL53GpVb9g6tyd35Pq8501oawqbYe2Dp6xRbMH60yMuhUGekYAHjz0hlkGk8r25JhXbMKpWnUcc_DBp5KJ5V44S9L-vhV3YzQkQngtuBc71PH0V9Yj-HksxthAop0MNdUyL8r1S6EqYv6xh1mc/s380/anniversary1.gif' },
  { id: 2, title: 'Birthday Card', category: 'birthday', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnHZ805Y5pO6EyCVpFw3sc5YULHIUaH9c6BSeIBO-c1hCTnWjY6Ij8dqSPcwHxwqVgnXCHOjl_7J-BkB9uahm6Oji0C3aK3n9IVvAESX4CvFNIAlghdozHva_ZcMi3U3WZp7bfgweSm_0UL61S6xVWi-SR_ivJxvFG-hJrVIcibelDnIi3Oo3fp7hQRkQ/s1650/birthday1.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmwlBhu8-a42z9aRiwgQrpXDuBRyvhL6rH1TMmLTyPu299pK_1oxRqPCBQkFnwhxWfHzihv1za8xjN4PssRNprKStX0yq2E3xVTa_DrFJGwbfAu3YCGegXP46yju1JXeNIdNcKnHpVMBr_DQC_1ZalEhw-YUu9ObUnn7IvojXRmbtrSlohn8G2pbI0q8/s380/front-back.gif' },
  { id: 3, title: 'Congratulations Card', category: 'congratulations', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2lMZe6xUtLd10F9xFK967NhUPN0qULZqLGmTel1Hsv37JtakN7uPb4WDxC94KeTUWVjz5a3SxEdjwOomkrV0qnMKiULTUQ9VxluDCH4SgtzWfBBpMkYH325pz85AzNnO8X7pivShriRV2GYGMrWQvQJ0biycMRSfBlaLMBU8uhgHByxOddlAwS3rbErw/s320/congratulations1.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgz5bIiVQ5E14rzF3Kkg0GjMk-RnMCeHOx2lGdHRSK36uWMM2DX48Cxo7yLxM0Uq65hu_idSFVkPFUYQ9ya1NCiTjFMcO3u-DwKBYp4P46DmsyhALuJaSTDHANJ2dGLDHkqWR0SvXDAqw1h2rOt-MKnOaNYX509HzpKmvUOSqvgFXpTihd2uKwJZkNHVWY/s320/congratulations1.gif' },
  { id: 4, title: 'Halloween Card', category: 'halloween', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIiDABaaeFMpTB5p-vN3xWq8Ju5s2D3xJkvUZABVaipyA6YysZ_BkLJTxitoh2mxTOJrl_Rlvs3tpPLLv1cPIqj6uOJIXzPmp8nOPstxelpYyiCbaXDaYG242favwGjEYzKMH0Tnghm1Spl4PCxv7Nb0KyLlALtECQ38c_IAMyG7Rw8JPo4vb8VbOOqpw/s1650/halloween1.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmwlBhu8-a42z9aRiwgQrpXDuBRyvhL6rH1TMmLTyPu299pK_1oxRqPCBQkFnwhxWfHzihv1za8xjN4PssRNprKStX0yq2E3xVTa_DrFJGwbfAu3YCGegXP46yju1JXeNIdNcKnHpVMBr_DQC_1ZalEhw-YUu9ObUnn7IvojXRmbtrSlohn8G2pbI0q8/s380/front-back.gif' },
  { id: 5, title: 'Happy Holidays Card', category: 'happy-holidays', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCC18SxoR2se1kDP2XdlF_-SLW4to5fQUWBYpfpU9CIg7nnc9s0HlpYsZ-fwzH8lJHWhEEFM1757O7Fq-wsWd9lT-I4DYHCrbf8o8sTr2i8HPuUtC4IST_ZnJ0gZraSqZqk3kEd1n03R1RUPESXjrJSqnbW_p3xuo2z-pCn7CSWE0jyhBwC7WJddsRClo/s320/holidays1.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHWInnULh4h6AmLhpxqR-DhB6ytZIqgf5RZjaqkG3i4tGa6wQpDz-rNrepGFW0aYyvmjaiWgtX2atnRVBCv6Yo38VVx7RVqATDipje9kOHDoRCUWldzqpZzQ6RZzAQzEzfDHU-7vMSa_SN1MA_KlCGuq-bFZDnM7w5CmfD9tcnMbygd-BsJYUgs-hZ3ig/s320/holidays1.gif' },
  { id: 6, title: 'Invitations Card', category: 'invitations', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhM35KQdqdcbSkW8bYaVG0QQdnKl9jPXLWRngMw7ZCYN-tQheFSnSlHBYJlgDHuU4mrhK5fa3yiiFO_iT4O1QyPIPvrDpj8Nu9G24e02QNksJ9pKNXBYpRQjpXEfjP5oBozBfpQ9bMwX6VX23C8QzdwG-tGLJQic1ruaDzwq3uye5f3ChgxFAfNsEqAN9w/s320/invitations1.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmwlBhu8-a42z9aRiwgQrpXDuBRyvhL6rH1TMmLTyPu299pK_1oxRqPCBQkFnwhxWfHzihv1za8xjN4PssRNprKStX0yq2E3xVTa_DrFJGwbfAu3YCGegXP46yju1JXeNIdNcKnHpVMBr_DQC_1ZalEhw-YUu9ObUnn7IvojXRmbtrSlohn8G2pbI0q8/s380/front-back.gif' },
  { id: 7, title: 'Thanksgiving Card', category: 'thanksgiving', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLHAoN1HlhQbv-ItHLweEUrgd-YuVNWgYNLJjq2DMSxH8qNROk8gqaouqM5ugpTNzp_gjeZKU99y_sG8Tvy62FGWKPqW8p90NB7QadldqovEx0uayH84FqudpoSbLRusG2tcYs6tUYnRspNZAX7_Upt48Pp6SZ913xL37cWAugO_yd6Uu7KzBVz8zqETo/s320/thanksgiving1.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgn9KM2PFQsHq_TPYZnhhmjzeshMayIS-V3auEy4x2B5NpzOLQXPJWF9Y-O9FSJYPulaNbje9ZcOfrBoYCRCLhNUg3YoukSvxj6cf3aJYj-NZq6ukat3N2s_TkENlQb2we9KPHu74ZP3w9QkLrICCiMEIPIuZrrDw2sX5L81Ofaa4TPS1gEynVqoO4uWWI/s320/thanksgiving1.gif' },
  { id: 8, title: 'Anniversary Card', category: 'anniversary', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8_V_38g5j9ZRS8mpyCArZ8B1756VEV8Dmawd9fkCZ60hJPuAlAuNxMxTPJzoMw-_MF0ieJXN99SUXDmcLw9wyVkay1JpkEv1cOZAZ8SD-4-CVRK-57KypvhKcGBkOuYoO8hFofbyoxEgM1F4vw00jBV_t44jf4u91aOH_5rI2E_pBIT27kViB7Vei-QI/s825/anniversary2.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjwdiwWWxjkWntf4w-H9u-SXklgNppgBt3a2qYeGRst2yyxQwKz9EaRWjAJAMOfrJurpE1uh75OFFZcST7CXNobn6_RmSfhxvpffBfRI1kgburX_YAaffg6ZCxevwBBT1K7t0JquOz1aiXzyh15Jz6D9wxasHjSQ-KCbZ6kR158z7tusNqi3u0RZTCj5Q/s380/anniversary2.gif' },
  { id: 9, title: 'Birthday Card', category: 'birthday', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIpcYoFWI59FSC28jdObYilPbRbNcMtK9C36e5A9Pp0sfG71k3yO7JHfJ9fJ6N_TyksuLDzZ4RfyJKfi88RJcyVC8FQGyO6xeDZXDS45YXZtf2txIMJZGHioV76KwtsV5_6fWCwcDkMvPaN_u6D2HPl1tP_AJr2Dr1erEiCV5dGwlHUhla4WMduBTrZrE/s647/birthday2.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmwlBhu8-a42z9aRiwgQrpXDuBRyvhL6rH1TMmLTyPu299pK_1oxRqPCBQkFnwhxWfHzihv1za8xjN4PssRNprKStX0yq2E3xVTa_DrFJGwbfAu3YCGegXP46yju1JXeNIdNcKnHpVMBr_DQC_1ZalEhw-YUu9ObUnn7IvojXRmbtrSlohn8G2pbI0q8/s380/front-back.gif' },
  { id: 10, title: 'Congratulations Card', category: 'congratulations', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyiHS8x6I0TWtZyIfvy8uBI2WXVtd6e9N5PVllBHDgTmpqO5F4AE-dBq578QO-4Yuu_546-dzFWcJ3SntNe27fEKXy3lc6AUkSYFwMU3ng6WB4v4GlvXUhzgFXMpoe1sT_bKXa6aA2nK9z-1DXwnw7u6-aQxT3C51wTvPg5VvA1Wh4z0Uz5EoDtv64sU0/s320/congratulations2.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEic-HNTnFegc8xG2hWEBIxo75p5MynlYI_g8H1wqvIlEfB-lv3UvyV64ZhYOfEJ5CIH5_izarCdBfPildYhp4rB5UrVzzHkD1D6nPUMUYDvmKOnsP_BD_k1ZhhN7snIsalug2tJcFbVG-6KgSlMeMMlVQPpdm_90ct7vXnQCdWya0JVfTl-WRU9epe-x-A/s320/congratulations2.gif' },
  { id: 11, title: 'Halloween Card', category: 'halloween', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4BX1sHppwrvAsKuRM-QqCJfvRJoSeR9op2qPOeco-vKaU9KnT3qeDjQj_F65y3d4ABr_fMLliO8fcDmb3HYWNKktuL506KO_QLnoHQC_PjjFgXHderlR1Jh4uit0AjYIwxfvVyn4B-sRuHsPOAFg3UoYdLfdrTEcDwglzRsmifWLLobKdruFsWvhd-hU/s320/halloween2.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmwlBhu8-a42z9aRiwgQrpXDuBRyvhL6rH1TMmLTyPu299pK_1oxRqPCBQkFnwhxWfHzihv1za8xjN4PssRNprKStX0yq2E3xVTa_DrFJGwbfAu3YCGegXP46yju1JXeNIdNcKnHpVMBr_DQC_1ZalEhw-YUu9ObUnn7IvojXRmbtrSlohn8G2pbI0q8/s380/front-back.gif' },
  { id: 12, title: 'Happy Holidays Card', category: 'happy-holidays', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXkaghHjpMnxcjpSq1VIwHbhqBSRHl9TOAX-4eGgDKUvdw-SfEbGF63IYj4GNBA4ztZlqYkWB-61GV25X9SYIXfPk5qe0g-ZJBt1WaxVvlD6D0_6iEEWffQBfyx6Fl6tnCynuME3PBiy8FikAETsFpcVd6zXZzLHXSA7_F6onAQOVyqTofIQIow-erIaU/s320/holidays2.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpDnyZcGFeZ-uAsvG1LN2gG2MPt8C6cEwmcQFbzdeK4i6j6YhEZeqiU5uNsIISKjTQCSN5uEqgOmHiDDxmNR9lYFbHGrfHH65QTiG9HGTnOIwMUMFGSF7fDvIq6kTu_5pQ8JZQd4FYEdpaiPRqxTXqoC8baECUm9N9w1Vf0xZO8QKUMTKGfyAXVoXRFSE/s320/holidays2.gif' },
  { id: 13, title: 'Invitations Card', category: 'invitations', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwr-KQOOd_R6-3AVlmhSnD4kL7sb65ZURAjLFpVI6BMWrKxvrkk7sbbBB84AhXhSCdCn2Z7lgoL9BrCpuUpx3IV6xrtY6_Jggd2RlqdbYZCY9mT7ZEXHgLMQvpavXWtcifSFsscyJzagI9skFNghZUzbpuJdrSqPWYalGcg8vICvHX1XirTFKI9tQUeUs/s320/invitations2.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmwlBhu8-a42z9aRiwgQrpXDuBRyvhL6rH1TMmLTyPu299pK_1oxRqPCBQkFnwhxWfHzihv1za8xjN4PssRNprKStX0yq2E3xVTa_DrFJGwbfAu3YCGegXP46yju1JXeNIdNcKnHpVMBr_DQC_1ZalEhw-YUu9ObUnn7IvojXRmbtrSlohn8G2pbI0q8/s380/front-back.gif' },
  { id: 14, title: 'Thanksgiving Card', category: 'thanksgiving', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYgEq095bhyphenhyphenzvvJwx7NE80jRGIv-S5KhaCsruoDWc9wWN89AdY7qrhEnIJd_Qo8GWc9k9FWIMKU_XTKYJR3L8EQLGcPyn6F4FNWozplC3tink-Z54vxA5TFE_yAtWjYeiRJGTjMZZEpkzD6eRxgUa9rs0ylRZQWZtc4wTObrJxZi2REuw5HUiqISpCft0/s320/thanksgiving2.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDblakC3uMsgANCSYpLQ0UKiHlDPi6ToQfYgVAcLfTgEGoA-0sZFG5BbyQOp8ubm_k3EBM7tQE4sRnGWLpUGV_QcjfkJ65k00imvanzlS0UQqsatP1lJQeGe8JFwUqvz9EsqMgFGkXCJuDpcJH01B3RkS1iLCkEXgTs1altsNXJB8J3xj66ho__XrhWA4/s320/thanksgiving2.gif' },
  { id: 15, title: 'Anniversary Card', category: 'anniversary', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdifL087w5msxbn46VoNo4cjYOtZDIt-IDfIbeObJcnUoPeDVsnNbBQZYSHx_6MZaiHh0dM6g55utrzrK4NKYt4xCik6t2ObEsJIa7HAKU2XuqP-bWrf_EH-Ma4uNSWxMbFuM4Objd6CpMBo6aFjD19gh_YNO9XpJtRVczYkH7O40VB1q-cZZregFz2wU/s1650/anniversary3.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEha16h7igd-STUTU8C8Jg7X03QZKX5uWgMfDpOFk0vq-oiymBDJVu1WuVzQCpHkXd9JC2CCFwPfUnqhfTp5kwnx98jhYKKMRgq6Z1wKJIXySN-LeCVNaO1FXvgFCAeLamvKLQbJjXBL8LwfeTZpEzXtPgMNEPmioynHhGbIrq4U8bl_prBC-FApGMVNX4w/s380/anniversary3.gif' },
  { id: 16, title: 'Birthday Card', category: 'birthday', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggQODvD_9pCURbU1q8UBuLwSBbTWQa12b95aMtiy-IdTZDC5whk1FYR41-5gA7t3AXfyCkTRnr2RZ5NrsI4V4-KGdWAuT4uanmK4zScltKYRKyIn17Qghh1VRu3Fud60Ga2cOZQhjPRmUywsX4h59h-nXbVgJoQGkgp_HzAcpMa7AgUbeCbY8ISkNaUbo/s2100/birthday3.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmwlBhu8-a42z9aRiwgQrpXDuBRyvhL6rH1TMmLTyPu299pK_1oxRqPCBQkFnwhxWfHzihv1za8xjN4PssRNprKStX0yq2E3xVTa_DrFJGwbfAu3YCGegXP46yju1JXeNIdNcKnHpVMBr_DQC_1ZalEhw-YUu9ObUnn7IvojXRmbtrSlohn8G2pbI0q8/s380/front-back.gif' },
  { id: 17, title: 'Congratulations Card', category: 'congratulations', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfQPIQrysLsb4o315W5LsgNtt4LZxHFHgPwZhFJsWmQ4PS202y_UjuXK095XV6NXF0CypQNrWnG6fEpOEc_iBiTPbqneWZzivuTxb0xMqiy-M_bNRsXYd_DXpmRa2XeOrcfB7iM3bIbZx8FVrFNlszTtmqeHxidEvZJEB2XmiCCSTEyLZbK-rWTWKEkIs/s320/congratulations3.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhY5dWVz4FBz_MtzJeyVgxw8iS2mj7L0Cg59NXOcmBD7dCoLLa7f5-jdp7CxXCPF4cVR03Mr7_5zh50RWZfHoQQyOQsiOHpMoF4AbsQPtL4tLw2vVmuonpwKXeFQRWb9Bf5iODIxhWZqsUbGwyvO4WnSaSm4_y9q9SoGiIIZ5cTx0RkYNVO0XNc0D0pjgU/s320/congratulations3.gif' },
  { id: 18, title: 'Halloween Card', category: 'halloween', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQql5xnBxwUMKqgwEPsSqLuwDA4SPAlkje1BRkVEggb0PgM2eyrlPsTogzvGzx2ZDTQhDhZaczoOpVjagIKktSpfeDK_EcN2N3xI_bj55YE36rrsjtQtTM4KqN0ZLM7-aalQTP42AyUUTcYw6eu-rZ8KTxMoCHTEmckBgm1uKMRSJ-upxiVnzW8VJSMts/s320/halloween3.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmwlBhu8-a42z9aRiwgQrpXDuBRyvhL6rH1TMmLTyPu299pK_1oxRqPCBQkFnwhxWfHzihv1za8xjN4PssRNprKStX0yq2E3xVTa_DrFJGwbfAu3YCGegXP46yju1JXeNIdNcKnHpVMBr_DQC_1ZalEhw-YUu9ObUnn7IvojXRmbtrSlohn8G2pbI0q8/s380/front-back.gif' },
  { id: 19, title: 'Happy Holidays Card', category: 'happy-holidays', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqibV4Eq-pwIqoFTy8vWlW-w5t8UMGLmd0gpYaOQiEKAc9LbYeOUUKOuNBA05m_En6FBxqHmu03-6otVsAbPCkCnB_96nkz9gyZmAPns-s79ZLeU_JNGk90yvbdbe-iJ3nwFShQCVP1oi3zFyTrzzjWmsSs79Rhva0EWH8GQboSH8EUNGrBa4FQ4nEdi4/s320/holidays3.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjp-KCWrCGO4G4e69DvQRn-WimmiGPVOlXsJTBZfnVTW10JNM0ZXQfYz6p_BsC19so-ch2OPYGaE-1yMmtFzQ0kpYKtMd9aRBQr1LGwbIP3seHka9ueqsGAA-3ypi3kkWMiaBnC1yehNUO8gdoT-iEhL73mKwdqCWds8L53i21YS6g5b9cBlJ5b4E3alqg/s320/holidays3.gif' },
  { id: 20, title: 'Invitations Card', category: 'invitations', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjeknhCqrypJPoxfZH_DG_zFEiI2RmJUuOxpJsPXY3PckrBnl1k4A9Uq5sXqe0EAEO-yiF-udF4tSZO7DSVvcmQA8bKDOlpjdlNcYQGefYvVcjcIo8Fg4c4sLD8RCpXqC7sNcy7BlttCSIOpzTOEamBvAZUMXjSb11OODHVow1rpYf6YBwFrewFgGiYvz8/s320/invitations3.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmwlBhu8-a42z9aRiwgQrpXDuBRyvhL6rH1TMmLTyPu299pK_1oxRqPCBQkFnwhxWfHzihv1za8xjN4PssRNprKStX0yq2E3xVTa_DrFJGwbfAu3YCGegXP46yju1JXeNIdNcKnHpVMBr_DQC_1ZalEhw-YUu9ObUnn7IvojXRmbtrSlohn8G2pbI0q8/s380/front-back.gif' },
  { id: 21, title: 'Thanksgiving Card', category: 'thanksgiving', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiW-3FlABZEqnaZTd01QRvv8UZZgTQLemv_XKHy0R5sCrLwHMFYiYjcH6UuD2nTaFNY7i2lQjKbOONdRBvyVDPmDlI5kchdCyNcgwajrufvY6aKIaD_2lLrdL97pcYQ5ce3rz71hwTBfeQWVomBfDcbI1vcYUbTMxF9CrMRV-17_tJhTpj2icKMRSx6EvI/s320/thanksgiving3.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilxURyVR0xIRowP6pXPT1U9q-1DFQbFfXphJdU6xTQBqldmcknU0x980tmDtpg_xWHR0gf_9yTA4CSKgKgN5HM6PNECQo4pOAfPhAhou-Yoj8-PQYWPfH0Ud7Ey2jX0XzpCPYvNq0kvnFmT2-z_DQvCKGI3CPp-2DCqqv-0pFI-JhyNq9O-ETc-1aQG98/s380/thanksgiving3.gif' },
  { id: 22, title: 'Anniversary Card', category: 'anniversary', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLFhfp7h_uNQtvPpK7jclFt3hQcjYuTXvcmLKcLdBoW6PoZhuXSDFE6Tpags1A0dH8fz6SQVHc35xoUKBb1scRxfrGvEQymD3PMHj_RRmeAOxJcxFBbahIoiaCoK36ph1_0E6cRsTuWpkz6ok6bKC7YGrUYrNSK1P4F2M9H3Xa9Lf3h65lEupKFei9mo0/s1650/anniversary4.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiViAyjLXK9uu9NivtPt95gxW3211B9Q3BWM3vrHCgfW0OUs1AjK1fqB-S5c6mqJwhfjT45NEEc2giEz6SdPgiSyqcD1I7hQh8_L2JqJCX9ABkWL0aIWhW2hdyR38VKRjUU7-JGFmA2NHxhwJTktjj4lLqsg96x2hMjBLQ2FSSAs5yrDr5E4r4MqtF67z0/s380/anniversary4.gif' },
  { id: 23, title: 'Birthday Card', category: 'birthday', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRpJiMk087vcP1Yo2SN4wOinTuO_S0SgYN42PSnz5LmIYC9blCqI3BeVnrTWd1zgsit7fHTV2-js60w4ymQ-WZ09zzyyKSKDP4dmma66mNVZJOY7ZkytvagPR1LOAhvu5d46UdEgBNzthxUIDEA9bxId_Z5b2lsfr8kJhT2Mv6nm0zufMd7s1oQM8TAjI/s826/birthday4.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmwlBhu8-a42z9aRiwgQrpXDuBRyvhL6rH1TMmLTyPu299pK_1oxRqPCBQkFnwhxWfHzihv1za8xjN4PssRNprKStX0yq2E3xVTa_DrFJGwbfAu3YCGegXP46yju1JXeNIdNcKnHpVMBr_DQC_1ZalEhw-YUu9ObUnn7IvojXRmbtrSlohn8G2pbI0q8/s380/front-back.gif' },
  { id: 24, title: 'Congratulations Card', category: 'congratulations', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijxMWW3JgWcKs6WBnVpOPIfq9Io7q3aYnSgvohzm-8Fdmc_BWDXCbQbmP1n8aW5uWml4cp05aoR1ryyJhwjp0tBdXecUbbi9OpUX92yLnE965WDSLBcZGy1tYXBRJN3TVF8iesdfrXSFY3SSOMXmBETFq6Gr28pCNj6oyAorfVxnJ6IZveIBZEgHUOK7Q/s320/congratulations4.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFikCgYhVlCvz9bord6vkgyo3ND-3N8r2VXm_n_Nq6oPwS9UOYuRGunf5yMU5Mv1r49g4d-n-ivtC1WPT8_Mx2Vgd1cuhFfbkHmme23WkKgHJNStpabPK3CotiwUCmd65yYaA6QGIomBssSdi8MPuS6aAqRh8m4ppBSInOzv21X_Mk-ytA4rXaO5JzBSo/s320/congratulations4.gif' },
  { id: 25, title: 'Halloween Card', category: 'halloween', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjom9LU6whPQPwGAKphKRGT8mti-u-eN80JNdTGpPAd0voA7s0xrc6-U6h3FAr2bf9fXYT4jls1lZS1w94WgeC33zk685j1e22FfNgT1DHACpgp4J7Bx8X3QsTlweSQ6pV6tlqt8QCmZs8PcQIBiFvjtImTx_RbONLMdmCkuWrZ_Ze_h4bE1RRwiPE6kac/s320/halloween4.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmwlBhu8-a42z9aRiwgQrpXDuBRyvhL6rH1TMmLTyPu299pK_1oxRqPCBQkFnwhxWfHzihv1za8xjN4PssRNprKStX0yq2E3xVTa_DrFJGwbfAu3YCGegXP46yju1JXeNIdNcKnHpVMBr_DQC_1ZalEhw-YUu9ObUnn7IvojXRmbtrSlohn8G2pbI0q8/s380/front-back.gif' },
  { id: 26, title: 'Happy Holidays Card', category: 'happy-holidays', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-zB5c9_MOVdwCUu3OhEaccdvbo1fkb7diVfr8utG6i9ORuYPapwjYQKmJvtRVWWIwM-MsGIA5ZomoheDnjSoroLs0ZfO4p4Wdk_v5hTiA7XzQea_wq_Z5Y0XUFJre2Ns8_O3nELZvt2MDihqBWCc7YcMp2rwdJypHFLTcEB4VV-uNVbvSl5dNns4mHo0/s320/holidays4.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCPpP3Qb90tS7qJjt7SNeYq0Y9LowACXsrj2INfwMoz9sYw9DS-EqNuhe_uiggDyS6WV0YblyJDf4gaIfeu_mxKoebZm_quzP11UrPVMdFWZ385NLNc72Nty-iz0aHAgaSI-fmr1ohyphenhyphenmzId4JX23aHYiPoUlCi2kLoeyffHvpBi07G5N5mCiK40AYFh8Q/s320/holidays4.gif' },
  { id: 27, title: 'Invitations Card', category: 'invitations', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyVzrpVNMYfnE2aAYaaTv5eOu-BSQr64Ll9ms0jLBdjCZNgZwUwppc_f4n4wOI4z8_k0BI0YBJyaVh1UsAagDuqEFMpPb1IfPzdDJo6VmWkq39pNVac4klld1_K85n2V_szI3z3ktSef7RYfcV0gJbzlX08m17rkHWqxwTzn4vtKRwA83q-bD35aO2jQA/s320/invitations4.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlmwlBhu8-a42z9aRiwgQrpXDuBRyvhL6rH1TMmLTyPu299pK_1oxRqPCBQkFnwhxWfHzihv1za8xjN4PssRNprKStX0yq2E3xVTa_DrFJGwbfAu3YCGegXP46yju1JXeNIdNcKnHpVMBr_DQC_1ZalEhw-YUu9ObUnn7IvojXRmbtrSlohn8G2pbI0q8/s380/front-back.gif' },
  { id: 28, title: 'Thanksgiving Card', category: 'thanksgiving', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzXiekT_s2XpvWhw-osmi28kJqVSldRk05gN8QV2zdQRFss3SwydqAmSFb7qZ_Hr-uCb0znw2HoK1zWrklfB-fJf41MxpjfHgvt89trdvqqrhABOL0j7JaTLEFVKGUs-ySvd8HvGyUXQfBkds_2w1vXu_ltIFrPLEcAwQ1C-Hc34putJHiwshT92HElww/s320/thanksgiving4.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis-rTYH08-dQKEVV4u7_GplZPEid5uWN8PH0P31Kcj7utmeVALrSfBmg6m0iaQuu16ZDh7M2MrON771e7UuDL_YWIMR_gXLgoyXmnwhADROAEc1p8uK_1yBnvFh9h_r9LH4oxOya3mpvMdnvu__0TaBWh2RghLMeKO4zcHrjLlSWQ3yhs7AQxdrHHfjzU/s320/thanksgiving4.gif' },
  { id: 29, title: 'Happy Holidays Card', category: 'happy-holidays', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJ-JMMemjoLYFxZv0Po-Quk2HCTu50UAOm_j7aqaMjFYHIEBR9jXDTUyWRydPrqcxEzedcSRvRzG48PNlep092uMvBwkkacoEdgCcKZgp2o5dGkTmBhyHxyTrWRcb93TL-iQzQ8lk6ScLN9wJHr64aDJgPQCXrVAUVDR3A02zCr6PGN4LAtu-1Bcloai0/s320/holidays5.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisSG8WgASTrXxOUPomxm4pGDg2vXP0tBY4Ebp6YaKK_V3rvu2D7pBehTCx0ECgS38UXmHZAadGGuzMjfwDKw4ZvBoIq7v6rnUE0Amtl1NyXlqV9NBlo6YePdUzB1YjMTUf8sqXPbKeIcROVTklppaKaNFXKiBhDoSdRy2O4iej25tyll45lTdQHyDJlaA/s320/holidays5.gif' },
  { id: 30, title: 'Thanksgiving Card', category: 'thanksgiving', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijFFpun82iJGZmDJeMZVyCb1CfJcKCd-_SKiRq8MRXWvfuPXH5J2JcySz89qEkd55R0Qkl7WTUC-WzUHHF-5inyD8MFaHRBFs3MN9U2kJS6v0hCVnWhEZxU2b_jqaVGY_Rs5vCLaOUsP7h7Jo5m3ihGu01nD68hosBqztaRJTHGdPAAETFlJoEHflSG-A/s320/thanksgiving5.jpg', gif: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4bPkKuUClHn3uIpl8uo1cHAFBXmX3g_S_Oo4_y0J4SFxnTHfNf1mBp9S8di_P4IjF3ULqUxeiEro1ApK2VcS55cSKW7P0NSfU0RvsTCjYFxwPO0Zhfv0hmc0Ud7QJiG1jPtZLbTqmG9eyYwozeANb-BfxecL4ovdgAsKw8es2qaqSoHe3ZH2L3Opf90M/s320/thanksgiving5.gif' },
];

// Function to display cards based on category
function displayCards(category) {
  const catalog = document.getElementById('card-catalog');
  const categoryTitle = document.getElementById('category-title');
  
  // Clear the current catalog
  catalog.innerHTML = '';
  
  // Set the title based on the category
  if (category === 'all') {
    categoryTitle.innerText = 'All Cards';
  } else {
    categoryTitle.innerText = category.charAt(0).toUpperCase() + category.slice(1) + ' Cards';
  }

  // Filter and display cards based on the selected category
  const filteredCards = category === 'all' ? cardsData : cardsData.filter(card => card.category === category);

  filteredCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card-item');
    
    // Add image with hover effect to switch between static and GIF
    const cardImage = document.createElement('img');
    cardImage.src = card.image;
    cardImage.dataset.gif = card.gif;
    cardImage.alt = card.title;

    cardImage.addEventListener('mouseenter', () => {
      cardImage.src = card.gif;
    });

    cardImage.addEventListener('mouseleave', () => {
      cardImage.src = card.image;
    });

    // Add button to select the card
    const button = document.createElement('button');
button.textContent = 'Choose That';
button.onclick = () => {
  // Update selected card information and show "Messaged" page
  updateCardSelectedSection(card);
  showPage('messaged'); // Navigate to "Messaged" page
};

    cardElement.appendChild(cardImage);
    cardElement.appendChild(button);
    catalog.appendChild(cardElement);
  });
}

// Set up category buttons
const categories = document.querySelectorAll('.category');
categories.forEach(categoryButton => {
  categoryButton.addEventListener('click', () => {
    const category = categoryButton.dataset.category;
    displayCards(category);
  });
});

// Display all cards by default
displayCards('all');

// JavaScript function to show the selected page and hide others
    function showPage(pageName) {
      var pages = document.getElementsByClassName('page');
      for (var i = 0; i < pages.length; i++) {
        if (pages[i].id === pageName) {
          pages[i].style.display = 'block';
        } else {
          pages[i].style.display = 'none';
        }
      }
    }
	
	// Function to handle the textarea options (alignment, font size, and font style)
document.getElementById('align').addEventListener('change', function() {
  const message = document.getElementById('message');
  message.style.textAlign = this.value;
});

document.getElementById('font-size').addEventListener('change', function() {
  const message = document.getElementById('message');
  message.style.fontSize = this.value;
});

document.getElementById('font-style').addEventListener('change', function() {
  const message = document.getElementById('message');
  
  // Check if a custom font is selected and apply it
  if (this.value === "hwBeau") {
    message.style.fontFamily = "hwBeau, sans-serif";
  } else if (this.value === "hwBernie") {
    message.style.fontFamily = "hwBernie, sans-serif";
  } else if (this.value === "hwBlaire") {
    message.style.fontFamily = "hwBlaire, sans-serif";
  } else {
    message.style.fontFamily = this.value;
  }
});

// Handling form submission (could be sent to a backend, here it's just a placeholder)
document.getElementById('sent-info-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data (you can extend this to send it to a backend)
  const sendDate = document.getElementById('send-date').value;
  const recipientName = document.getElementById('recipient-name').value;
  const recipientAddress = document.getElementById('recipient-address').value;
  const yourName = document.getElementById('your-name').value;
  const yourAddress = document.getElementById('your-address').value;

 
});


// Function to update the "Card Selected" section with selected card details
function updateCardSelectedSection(card) {
  const cardNameElement = document.getElementById('selected-card-name');
  const cardImageElement = document.getElementById('selected-card-image');
  const pricingTable = document.getElementById('pricing-table');

  // Update the name and image of the selected card
  cardNameElement.textContent = card.title;
  cardImageElement.src = card.image;

  // Update pricing table dynamically (for now, using static pricing data)
  const pricingData = [
    { quantity: '1', price: '$3.25' },
    { quantity: '2 > 20', price: '$2.93' },
    { quantity: '21 > 50', price: '$2.44' },
    { quantity: '51 > 100', price: '$2.11' },
    { quantity: '101 > 500', price: '$1.79' },
    { quantity: '501 > 1000', price: '$1.46' }
  ];

  // Clear existing rows
  pricingTable.innerHTML = '';

  // Create the table header row
  const headerRow = document.createElement('tr');
  const quantityHeader = document.createElement('th');
  quantityHeader.textContent = 'Quantity';
  headerRow.appendChild(quantityHeader);

  // Add the quantity headers (1+, 50+, 100+, etc.)
  pricingData.forEach(item => {
    const th = document.createElement('th');
    th.textContent = item.quantity;
    headerRow.appendChild(th);
  });
  pricingTable.appendChild(headerRow);

  // Create the row for pricing values
  const priceRow = document.createElement('tr');
  const priceHeader = document.createElement('td');
  priceHeader.textContent = 'Price';
  priceRow.appendChild(priceHeader);

  // Add the price cells
  pricingData.forEach(item => {
    const td = document.createElement('td');
    td.classList.add('price');
    td.textContent = item.price;
    priceRow.appendChild(td);
  });
  pricingTable.appendChild(priceRow);
}

document.getElementById('sent-info-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  const sendDate = document.getElementById('send-date').value;
  const recipientName = document.getElementById('recipient-name').value;
  const recipientAddress = document.getElementById('recipient-address').value;
  const yourName = document.getElementById('your-name').value;
  const yourAddress = document.getElementById('your-address').value;
  
  // Get the selected card image link
  const selectedCardImage = document.getElementById('selected-card-image').src;

  // Get the message content
  const messageContent = document.getElementById('message').value;

  // Get the selected font style
  const selectedFont = document.getElementById('font-style').value;
  
  // Get the selected quantity
  const selectedQuantity = document.getElementById('quantity').value;

  // Construct the URL for Google Forms submission
  const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSf8-XkTJvwc37YxiOKQbCnopANotIUM2nlPOSOwm9iGiLRMYg/formResponse";

  // Create a new FormData object to send the form data
  const formData = new FormData();

  // Map the data to the Google Forms entry fields
  formData.append('entry.1227898845', selectedCardImage);  // Selected card image link
  formData.append('entry.986534822', messageContent);  // Message content
  formData.append('entry.111409662', selectedFont);  // Selected font style
  formData.append('entry.304285298', selectedQuantity);  // Selected Quantity (new entry)
  formData.append('entry.2067207830', sendDate);  // Requested send date
  formData.append('entry.222750441', yourName);  // Sender name
  formData.append('entry.615426978', yourAddress);  // Sender address
  formData.append('entry.1485487868', recipientName);  // Recipient name
  formData.append('entry.1417042995', recipientAddress);  // Recipient address

  // Send the form data to Google Forms using a POST request
  fetch(googleFormURL, {
    method: 'POST',
    body: formData
  }).then(response => {
    if (response.ok) {
      alert('Your message was submitted successfully!');
      // Optionally, reset the form or navigate to a "Sentdone" page
	  // Redirect to the "Sentdone" page
      showPage('sentdone'); // Navigate to the "Sentdone" page
    } else {
      alert('There was an error with your submission. Please try again.');
	  // Redirect to the "Sentdone" page
      showPage('sentdone'); // Navigate to the "Sentdone" page
    }
  }).catch(error => {
    console.error('Error submitting the form:', error);
    alert('There was an error with your submission. Please try again.');
	// Redirect to the "Sentdone" page
      showPage('sentdone'); // Navigate to the "Sentdone" page
  });
});



// Listen for changes to the Quantity dropdown
document.getElementById('quantity').addEventListener('change', function() {
  const quantity = this.value;
  
  // Get the form fields
  const recipientNameLabel = document.querySelector('label[for="recipient-name"]');
  const recipientNameInput = document.getElementById('recipient-name');
  const recipientAddressLabel = document.querySelector('label[for="recipient-address"]');
  const recipientAddressInput = document.getElementById('recipient-address');
  
  // Check if quantity is not '1+'
  if (quantity !== '1+') {
    // Hide recipient name and address fields
    recipientNameLabel.style.display = 'none';
    recipientNameInput.style.display = 'none';
    
    // Change address label to 'Spreadsheet URL'
    recipientAddressLabel.textContent = 'Spreadsheet URL:';
  } else {
    // Show recipient name and address fields
    recipientNameLabel.style.display = 'block';
    recipientNameInput.style.display = 'block';
    
    // Change address label back to 'Address'
    recipientAddressLabel.textContent = 'Address:';
  }
});

document.getElementById('template-selector').addEventListener('change', function() {
  const template = this.value;
  const messageTextArea = document.getElementById('message');
  
  let templateText = '';
  
  switch (template) {
    case 'birthday-professional':
      templateText = `Dear XXX,

You deserve the best of everything because you give the best to everyone around you.

From all of us here at XXX, Happy Birthday.
XXX`;
      break;
    case 'thank-you-personal':
      templateText = `Dear XXX,

From the bottom of my heart, thank you so much for your generosity and thoughtfulness. I love the ______ and am truly touched by your kindness.

Thank you again.

Love,
XXX`;
      break;
    case 'anniversary-personal':
      templateText = `Happy Anniversary, XXX & XXX!

We hope with every year your love for each other grows and gets stronger.

Thinking of you both,
XXX`;
      break;
    default:
      templateText = '';
      break;
  }

  // Set the selected template text into the textarea
  messageTextArea.value = templateText;
});

